// define everyone:

var gVI = setPerson(
  'George VI WINDSOR, <em>King of England</em>',
  14,Dec,1895,
  'York Cottage, Sandringham, Norfolk, England',
  6,Feb,1952,
  'Sandringham, Norfolk, England'
);

var e_a_m = setPerson(
  '<em>Lady</em> Elizabeth Angela Marguerite BOWES-LYON',
  4,Aug,1900,
  'London, England',
  0,0,0,
  ''
);

var eII = setPerson(
  'Elizabeth II Alexandra Mary WINDSOR, <em>Queen of England</em>',
  21,Apr,1926,
  '17 Bruton St., London, W1, England',
  0,0,0,
  ''
);

var pp = setPerson(
  '<em>Prince</em> Philip MOUNTBATTEN',
  10,Jun,1921,
  'Isle of Kerkira, Mon Repos, Corfu, Greece'
  ,0,0,0,
  ''
);

var pc = setPerson(
  '<em>Prince</em> Charles Philip Arthur WINDSOR',
  14,Nov,1948,
  'Buckingham Palace, London, England',
  0,0,0,
  ''
);

var d_f_s = setPerson(
  '<em>Lady</em> Diana Frances SPENCER',
  1,Jul,1961,
  'Park House, Sandringham, Norfolk, England',
  31,Aug,1997,
  'Paris, France'
);

var pw = setPerson(
  '<em>Prince</em> William Arthur Philip WINDSOR',
  21,Jun,1982,
  'St. Mary\'s Hosp., Paddington, London, England',
  0,0,0,
  ''
);

var ph = setPerson(
  '<em>Prince</em> Henry Charles Albert WINDSOR',
  15,Sep,1984,
  'St. Mary\'s Hosp., Paddington, London, England'
  ,0,0,0,
  ''
);

var psa = setPerson(
  '<em>Princess</em> Anne Elizabeth Alice WINDSOR',
  15,Aug,1950,
  'Clarence House, St. James, England',
  0,0,0,
  ''
);

var m_a_p = setPerson(
  '<em>Captain</em> Mark Anthony Peter PHILLIPS',
  22,Sep,1948,
  '',0,0,0,
  ''
);

var p_m_a = setPerson(
  'Peter Mark Andrew PHILLIPS',
  15,Nov,1977,
  'St. Mary\'s Hosp., Paddington, London, England',
  0,0,0,
  ''
);

var z_a_e = setPerson(
  'Zara Anne Elizabeth PHILLIPS',
  15,Nov,1977,
  'St. Mary\'s Hosp., Paddington, London, England',
  0,0,0,
  ''
);

var pa = setPerson(
  'Andrew Albert Christian WINDSOR, <em>Duke of York</em>',
  19,Feb,1960,
  'Belgian Suite, Buckingham Palace, England',
  0,0,0,''
);

var s_m_f = setPerson(
  'Sarah Margaret FERGUSON, <em>Duchess of York</em>',
  15,Oct,1959,
  '',0,0,0,
  ''
);

var psb = setPerson(
  '<em>Princess</em> Beatrice Elizabeth Mary WINDSOR',
  8,Aug,1988,
  'Portland Hosp., England',
  0,0,0,
  ''
);

var pse = setPerson(
  '<em>Princess</em> Eugenie Victoria Helena WINDSOR',
  23,Mar,1990,
  'London, England',
  0,0,0,
  ''
);

var pe = setPerson(
  '<em>Prince</em> Edward Anthony Richard WINDSOR',
  10,Mar,1964,
  'Buckingham Palace, London, England',
  0,0,0,
  ''
);

var psm = setPerson(
  '<em>Princess</em> Margaret Rose WINDSOR',
  21,Aug,1930,
  'Glamis Castle, Angus, Scotland',
  0,0,0,
  ''
);

var a_c_r = setPerson(
  'Anthony Charles Robert ARMSTRONG-JONES, <em>Earl of Snowdon</em>',
  7,Mar,1930,
  '',
  0,0,0,
  ''
);

var d_a_r = setPerson(
  'David Albert Charles ARMSTRONG-JONES, <em>Vicount Linley</em>',
  3,Nov,1961,
  '',
  0,0,0,
  ''
);

var s_f_e = setPerson(
  '<em>Lady</em> Sarah Frances Elizabeth ARMSTRONG-JONES',
  1,May,1964,
  ''
  ,0,0,0,
  ''
);

// resolve relationships:

  gVI.setRelations(anon, anon, e_a_m, eII, psm);
e_a_m.setRelations(anon, anon, gVI, eII, psm);

  eII.setRelations(gVI, e_a_m, pp, pc, psa, pa, pe);
   pp.setRelations(anon, anon, eII, pc, psa, pa, pe);

   pc.setRelations(pp, eII, d_f_s, pw, ph);
d_f_s.setRelations(anon, anon, pc, pw, ph);
   pw.setRelations(pc, d_f_s, null);
   ph.setRelations(pc, d_f_s, null);

  psa.setRelations(pp, eII, m_a_p, p_m_a, z_a_e);
m_a_p.setRelations(anon, anon, psa, p_m_a, z_a_e);
p_m_a.setRelations(m_a_p, psa, null);
z_a_e.setRelations(m_a_p, psa, null);

   pa.setRelations(pp, eII, s_m_f, psb, pse);
s_m_f.setRelations(anon, anon, pa, s_m_f, psb, pse);
  psb.setRelations(pa, s_m_f, null);
  pse.setRelations(pa, s_m_f, null);

   pe.setRelations(pp, eII, null);

  psm.setRelations(gVI, e_a_m, a_c_r, d_a_r, s_f_e);
a_c_r.setRelations(anon, anon, psm, d_a_r, s_f_e);
d_a_r.setRelations(a_c_r, psm, null);
s_f_e.setRelations(a_c_r, psm, null);

// pick default person:

var details = PersonToShow = eII.No;
