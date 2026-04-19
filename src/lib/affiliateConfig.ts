export const affiliateConfig = {
  amazonTag: "22020-22",
  rakutenAffiliateId: "122f9eae.b916c8ee.122f9eaf.7c33c34b",
  yahooSid: "3768361",
  yahooVcPid: "890216131",
  mercariAmbassadorId: "2738561503",
};

export function amazonSearchUrl(keyword: string): string {
  return "https://www.amazon.co.jp/s?k=" + encodeURIComponent(keyword) + "&tag=" + affiliateConfig.amazonTag;
}

export function amazonUrl(asin: string): string {
  return "https://www.amazon.co.jp/dp/" + asin + "?tag=" + affiliateConfig.amazonTag;
}

export function rakutenSearchUrl(keyword: string): string {
  const target = encodeURIComponent("https://search.rakuten.co.jp/search/mall/" + encodeURIComponent(keyword) + "/");
  return "https://hb.afl.rakuten.co.jp/ichiba/" + affiliateConfig.rakutenAffiliateId + "/?pc=" + target + "&link_type=hybrid_url";
}

export function yahooSearchUrl(keyword: string): string {
  const target = encodeURIComponent("https://shopping.yahoo.co.jp/search?p=" + encodeURIComponent(keyword));
  return "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=" + affiliateConfig.yahooSid + "&pid=" + affiliateConfig.yahooVcPid + "&vc_url=" + target;
}

export function mercariSearchUrl(keyword: string): string {
  return "https://jp.mercari.com/search?keyword=" + encodeURIComponent(keyword) + "&afid=" + affiliateConfig.mercariAmbassadorId;
}
