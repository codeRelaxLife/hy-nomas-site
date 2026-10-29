export function renderAffiliate(affiliate) {
  if (!affiliate || affiliate.status !== 'live') return '';
  return `<aside class="callout affiliate"><p>If your card has limited VRAM and you want to experiment before buying, you can compare the cost of renting a cloud GPU. Availability and prices vary. <a href="/go/vast" rel="sponsored nofollow noopener" target="_blank">Explore GPU rentals on Vast.ai</a></p><p class="disclosure">${affiliate.disclosure}</p><p><a href="/about/#affiliate-links">About affiliate links</a></p></aside>`;
}

export function renderAffiliateAbout(affiliate) {
  if (!affiliate || affiliate.status !== 'live') return '';
  return `<section class="section" id="affiliate-links"><div class="section-label"><span>04</span>TRANSPARENCY</div><div class="section-body"><h2>Affiliate links</h2><p>Some outbound links on this site — currently the one at the end of the VRAM page — are affiliate links. If you rent a GPU through one, this site earns a commission from the provider at no extra cost to you.</p><p>A commission does not change what any table on this site says. Hardware figures are attributed to their sources.</p></div></section>`;
}
