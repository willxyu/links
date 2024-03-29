yy = typeof yy != 'undefined' ? yy : {}

yy.dseq = [
  'medtronic',
  'libre',
  'dexcom',
  'glooko',
  'laverty',
  'douglas-hanly-moir',
  'hunter-imaging-group',
]

yy.data = {}

/* CGM & Pumps */
yy.data[`dexcom`] = {
  key     : `dexcom`,
  keys    : ['hnelhd','nsw','aus','cgm','diabetes','clarity'], // 'imaging','pathology',
  display : `DEXCOM Clarity`,
  link    : `https://clarity.dexcom.eu/professional/`,
  logo    : ``,
  homepage: `https://au.provider.dexcom.com/`,
  last    : `28-Mar-2024`,
}

yy.data[`libre`] = {
  key     : `libre`,
  keys    : ['hnelhd','nsw','aus','cgm','diabetes','libreview'], 
  display : `Libreview`,
  link    : `https://www.libreview.com/`,
  logo    : ``,
  homepage: `https://www.freestylelibre.com.au/`,
  last    : `28-Mar-2024`,
}

yy.data[`glooko`] = {
  key     : `glooko`,
  keys    : ['hnelhd','nsw','aus','cgm','diabetes','tslim','t-slim'], 
  display : `Glooko`,
  link    : `https://my.glooko.com/users/sign_in`,
  logo    : ``,
  homepage: `https://glooko.com/providers/`,
  last    : `28-Mar-2024`,
}

yy.data[`medtronic`] = {
  key     : `medtronic`,
  keys    : ['hnelhd','nsw','aus','cgm','insulin pump','insulin','pump','diabetes','780G'], 
  display : `Medtronic`,
  link    : `https://carelink.medtronic.eu/login`,
  logo    : ``,
  homepage: `https://www.medtronic.com/au-en/hcp-landing.html`,
  last    : `28-Mar-2024`,
}

/* Pathology */
yy.data[`laverty`] = {
  key     : `laverty`,
  keys    : ['hnelhd','nsw','aus','pathology'], 
  display : `Laverty`,
  link    : `https://www.laverty.com.au/clinicians/online-results/`,
  logo    : ``,
  homepage: `https://www.laverty.com.au/clinicians/`,
  last    : `28-Mar-2024`,
}

yy.data[`douglas-hanly-moir`] = {
  key     : `douglas-hanly-moir`,
  keys    : ['hnelhd','nsw','aus','pathology','dhm','douglas'], 
  display : `Douglas Hanly Moir`,
  link    : `https://sonicdx.com.au/#/login`,
  logo    : ``,
  homepage: `https://www.dhm.com.au/`,
  last    : `28-Mar-2024`,
}

yy.data[`australian-clinical-labs`] = {
  key     : `australian-clinical-labs`,
  keys    : ['hnelhd','nsw','aus','pathology','acl'], 
  display : `Australian Clinical Labs`,
  link    : `https://results.clinicallabs.com.au/login`,
  logo    : ``,
  homepage: `https://www.clinicallabs.com.au/contact-us/`,
  last    : `28-Mar-2024`,
}

yy.data[`4cyte`] = {
  key     : `4cyte`,
  keys    : ['hnelhd','nsw','aus','pathology'], 
  display : `4Cyte Pathology`,
  link    : `https://4cyte.mocloud.com.au/rest/html/explorer_online/index.html#!/app`,
  logo    : ``,
  homepage: `https://www.4cyte.com.au/clinicians`,
  last    : `28-Mar-2024`,
}

/* Imaging */
yy.data[`prp-imaging`] = {
  key     : `prp-imaging`,
  keys    : ['hnelhd','nsw','aus','imaging','prp'], 
  display : `PRP Imaging`,
  link    : `https://pacs.prpimaging.com.au/Portal/app#/`,
  logo    : ``,
  homepage: `https://www.prpimaging.com.au/referrer/`,
  last    : `28-Mar-2024`,
}

yy.data[`hunter-imaging-group`] = {
  key     : `hunter-imaging-group`,
  keys    : ['hnelhd','nsw','aus','imaging','hig'], 
  display : `Hunter Imaging Group`,
  link    : `https://higpacs.com.au/Portal/app#/`,
  logo    : ``,
  homepage: `https://www.hunterimaging.com.au/doctors/`,
  last    : `28-Mar-2024`,
}

yy.data[`clarity-imaging`] = {
  key     : `clarity-imaging`,
  keys    : ['hnelhd','nsw','aus','imaging','clarity'], 
  display : `Clarity Imaging`,
  link    : `https://pacs.clarityimaging.com.au/Portal/app#/`,
  logo    : ``,
  homepage: `https://clarityimaging.com.au/referrer/`,
  last    : `28-Mar-2024`,
}
