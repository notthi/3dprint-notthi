// アプリアイコン生成（記事編集ワンクリックアプリ用）
// 使い方: swift make-app-icon.swift <出力PNG> <メイン文字> <サブ文字> <アクセント色 hex>
import AppKit

let args = CommandLine.arguments
guard args.count >= 5 else {
    print("usage: make-app-icon.swift <out.png> <main> <sub> <hexColor>")
    exit(1)
}
let outPath = args[1], mainText = args[2], subText = args[3], hex = args[4]

func color(_ hex: String) -> NSColor {
    var h = hex; if h.hasPrefix("#") { h.removeFirst() }
    let v = UInt32(h, radix: 16) ?? 0x06B6D4
    return NSColor(
        red: CGFloat((v >> 16) & 0xFF) / 255,
        green: CGFloat((v >> 8) & 0xFF) / 255,
        blue: CGFloat(v & 0xFF) / 255, alpha: 1)
}

let size: CGFloat = 1024
let accent = color(hex)
let image = NSImage(size: NSSize(width: size, height: size))
image.lockFocus()

// 背景（角丸・ダークネイビー、macOSアイコン風の余白）
let inset: CGFloat = 100
let rect = NSRect(x: inset, y: inset, width: size - inset * 2, height: size - inset * 2)
let path = NSBezierPath(roundedRect: rect, xRadius: 185, yRadius: 185)
NSColor(red: 0x0F/255, green: 0x17/255, blue: 0x2A/255, alpha: 1).setFill()
path.fill()
// アクセントの縁取り
path.lineWidth = 28
accent.setStroke()
path.stroke()

func draw(_ text: String, fontSize: CGFloat, weight: NSFont.Weight, color: NSColor, centerY: CGFloat) {
    let font = NSFont.systemFont(ofSize: fontSize, weight: weight)
    let attrs: [NSAttributedString.Key: Any] = [.font: font, .foregroundColor: color]
    let s = NSAttributedString(string: text, attributes: attrs)
    let w = s.size().width
    s.draw(at: NSPoint(x: (size - w) / 2, y: centerY - s.size().height / 2))
}

// 上段: 3D（アクセント色・小さめ）／中段: メイン文字（大）／下段: サブ
draw("3Dプリントラボ", fontSize: 72, weight: .semibold, color: NSColor(white: 0.62, alpha: 1), centerY: 730)
draw(mainText, fontSize: 250, weight: .heavy, color: .white, centerY: 512)
draw(subText, fontSize: 92, weight: .bold, color: accent, centerY: 300)

image.unlockFocus()

guard let tiff = image.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiff),
      let png = rep.representation(using: .png, properties: [:]) else {
    print("PNG生成失敗"); exit(1)
}
try! png.write(to: URL(fileURLWithPath: outPath))
print("✅ \(outPath)")
