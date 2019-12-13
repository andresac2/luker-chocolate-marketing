import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';
import logo from '../../../assets/img/Lukerlogo.svg'
import logoDark from '../../../assets/img/LukerlogoDark.svg'

class ModalDistributors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actualDist: [],
      distValue: 'co',
      distSelected: 0
    };
  }
  distributors = [
    {
      country: 'ar',
      company: 'TRADING ARGENTINA SRL',
      address: 'Espronceda 632, B1712JUC Castelar, Buenos Aires, Argentina',
      phone: '+54 (11) 4661- 6533',
      fax: '+54 (11) 4664- 6581',
      web: 'www.tradar.com.ar',
      email: 'gabriel@tradar.ar',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26254.56544788482!2d-58.6461502!3d-34.6592313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7552e6fa7b1%3A0x1841999274f45828!2sEspronceda%20632%2C%20B1712JUC%20Castelar%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sco!4v1576090065278!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'au',
      company: 'CAMPANIA ALIMENTARI',
      address: '25-31 Industrial Avenue, Thomastown VIC 3074, Australia',
      phone: '+61 3 9359 2799',
      fax: '+61 3 9359 0990',
      web: 'www.campania.com.au',
      email: 'paul@campania.com.au',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.326735928845!2d144.97677431531503!3d-37.6885249797753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6455f3dd9a66b%3A0xc90de8483ecc29a4!2s25%20Industrial%20Ave%2C%20Thomastown%20VIC%203074%2C%20Australia!5e0!3m2!1ses!2sco!4v1576098818769!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'bh',
      company: 'THE BAKING PRODUCT W.L.L',
      address: 'Building 450, Road 1109 Tubli, Baréin',
      phone: '00 973 17 77 3388',
      fax: '00 973 17 93 1313',
      web: 'http://thebakingproduct.com/',
      email: 'info@thebakingproduct.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3579.8571993759183!2d50.5599665!3d26.2013232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af30a424d343%3A0x58160bc5884daf03!2sModern%20Ingredients!5e0!3m2!1ses!2sco!4v1576098853630!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'be',
      company: 'LUKER CHOCOLATE EUROPE',
      address: ' Kortrijkse Steenweg 1132, 9051 Gent, Bélgica',
      phone: '+32 (0) 9 245 04 60',
      fax: '+32 (0) 9 245 04 62',
      web: 'www.cacaofinodearoma.com',
      email: 'casalukereu@casaluker.com.co',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10039.82800793212!2d3.6688263!3d51.0169432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37237be5ddb4f%3A0x795010e9abd7658c!2sKortrijksesteenweg%201132%2C%209051%20Gent%2C%20B%C3%A9lgica!5e0!3m2!1ses!2sco!4v1576098915486!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'br',
      company: 'EMULZINT – LINHA ORQUESTRA',
      address: 'Av. Arquimedes, 50 - Distrito Industrial - Jundiaí',
      phone: '(11) 2152-6878',
      fax: '',
      web: 'www.emulzint.com.br',
      email: 'mailto:Bruna.Rogerio@emulzint.com.br',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8974243351763!2d-46.933020985029486!3d-23.17394358487656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf25bd3d14d26b%3A0x73c8e3a290255771!2sAv.%20Arquimedes%2C%2050%20-%20Jardim%20Guanabara%2C%20Jundia%C3%AD%20-%20SP%2C%2013211-840%2C%20Brasil!5e0!3m2!1ses!2sco!4v1576098946465!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'ca',
      company: 'CHOCOLATE ALIMENTS',
      address: 'Vancouver, Columbia Británica, Canadá',
      phone: '778 895 6549',
      fax: '',
      web: 'http://chocolatealiments.com/',
      email: 'mailto:terry@chocolatealiments.ca',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827522842!2d-123.2639867747921!3d49.2576507715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20Columbia%20Brit%C3%A1nica%2C%20Canad%C3%A1!5e0!3m2!1ses!2sco!4v1576099002020!5m2!1ses!2sco"',
      selected: false
    },
    {
      country: 'ca',
      company: 'CHOCOLAT CENTRAL',
      address: 'Quebec, Canadá',
      phone: '1-877-745-199 - 514-745-7199',
      fax: '514-745-8731',
      web: 'www.chococentral.com',
      email: 'administration@chococentral.com - commande.order@chococentral.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.263288262578!2d-73.6963656844419!3d45.484642579101155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d336058dc4f%3A0x9fb447050ff18d10!2sChocolat%20Central%20C%20J%20Inc!5e0!3m2!1ses!2sco!4v1576099029078!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'cl',
      company: 'INDUSTRIAS NEUCHANTEL S.A.',
      address: 'Viña del Mar, Chile',
      phone: '+56997993731',
      fax: '',
      web: 'www.neucober.cl',
      email: 'josegil@neucober.cl, alonsogil@neucober.cl',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53550.774635573216!2d-71.4954916!3d-32.9794223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd0e4fa7a08f%3A0x2ecd520dd2f1151f!2sIndustrias%20Neuchatel%20S.A.!5e0!3m2!1ses!2sco!4v1576099083256!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'col',
      company: 'CASALUKER S.A.',
      address: 'CasaLuker S.A., Calle 13, Bogotá, Colombia',
      phone: '+57 (1) 4473700',
      fax: '',
      web: 'casaluker.com',
      email: 'lukercacao@casaluker.com.co - servicioalcliente@casaluker.com.co',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7495520310367!2d-74.12201768523794!3d4.638707796630306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bf75cc5b883%3A0x92615c5254798480!2sCasaLuker%20S.A.!5e0!3m2!1ses!2sco!4v1576094245775!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'cz',
      company: 'LYRA CHOCOLATE – SWEETPRO S.R.O.',
      address: 'Kalvária 3, 949 01 NITRA',
      phone: '00421 903 964 544',
      fax: '',
      web: 'www.lyrachocolate.com',
      email: 'info@lyrachocolate.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21234.59455205956!2d18.0920363!3d48.2966136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ef752807089%3A0x7681587402652c1f!2sKalv%C3%A1ria%203%2C%20949%2001%20Nitra%2C%20Eslovaquia!5e0!3m2!1ses!2sco!4v1576099132068!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'fr',
      company: 'JK SOURCING SARL',
      address: '13 Route de Trouville, 14000 Caen, Francia',
      phone: '+33 9 5233 0682 / +33 2 3183 5934',
      fax: '+33 9 57 33 06 82',
      web: 'www.chocolatemall.net',
      email: 'contact@chocolatemall.net',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.310696329437!2d-0.3377599843143766!3d49.175690679319764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a683b3f1ef12b%3A0x869eb82c15c277f7!2s13%20Route%20de%20Trouville%2C%2014000%20Caen%2C%20Francia!5e0!3m2!1ses!2sco!4v1576099179271!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'de',
      company: 'DILLICIOUS',
      address: 'Burbacher Straße 79, 53129 Bonn, Alemania',
      phone: '+49 (0) 228 / 92 96 01 66',
      fax: '',
      web: 'www.dillicious.eu',
      email: 'info@dillicious.eu',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.135716885199!2d7.108216315741078!3d50.717421279513104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee17ca0b5aef9%3A0xd8f1b535ee7988a6!2sBurbacher%20Str.%2079%2C%2053129%20Bonn%2C%20Alemania!5e0!3m2!1ses!2sco!4v1576099222796!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'gr',
      company: 'OPTIMA S.A.',
      address: 'Sorou 1 Metamorfosi 144 52 Grecia',
      phone: '(+30)210 2893400',
      fax: '(+30)210 2845937',
      web: 'www.optima.gr',
      email: 'marketing@optima.gr',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.9089851370013!2d23.765006315326197!3d38.072500679706216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19f56e381b36f%3A0x4e53980dcb4c0861!2sSorou%201%2C%20Metamorfosi%20144%2052%2C%20Grecia!5e0!3m2!1ses!2sco!4v1576099255004!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'gt',
      company: 'CHOCOLÁ S.A.',
      address: 'Ruta 1 5-13, Zona 4, Guatemala',
      phone: '+ 502 2360-3007',
      fax: '',
      web: 'www.chocola.com.gt',
      email: 'martins@chocola.com.gt',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15442.682335584452!2d-90.5179068!3d14.6178321!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a230ec0e98d1%3A0x76bd0233cf1d2c26!2sRuta%201%205-13%2C%20Guatemala!5e0!3m2!1ses!2sco!4v1576099291089!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'hu',
      company: 'INTERFOOD & PHARMA KFT',
      address: 'Budapest, Hűvösvölgyi út 54, 1021 Hungría',
      phone: '0036-1-200-5717',
      fax: '',
      web: 'www.herbalfoods.hu',
      email: 'apcinterfood@apcinterfood.hu',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.246114398948!2d18.98414471562768!3d47.52407127917936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ded6c8495b2d%3A0x7ee79a589f3f40bf!2zQnVkYXBlc3QsIEjFsXbDtnN2w7ZsZ3lpIMO6dCA1NCwgMTAyMSBIdW5ncsOtYQ!5e0!3m2!1ses!2sco!4v1576099392200!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'it',
      company: 'NEWCHEM S.R.L.',
      address: 'Via M. F. Quintiliano, 30, Igea Marina, Rímini, Italia',
      phone: ' +39 025061987',
      fax: '+39 0255400495',
      web: 'www.newchem.it',
      email: 'info@newchem.it',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.678225741285!2d12.481151415513333!3d44.13125877910782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc7ab4a87f2cb%3A0x88bb196c0b8d8da7!2sVia%20Marco%20Fabio%20Quintiliano%2C%2030%2C%2047814%20Igea%20Marina%20RN%2C%20Italia!5e0!3m2!1ses!2sco!4v1576099432300!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'jp',
      company: 'FINO DE AROMA, CO., LTD.',
      address: 'Grandmaison 101 2-22-5 Hongo, Bunkyo-ku',
      phone: '',
      fax: '',
      web: 'www.finodearoma.co.jp',
      email: 'negami@finodearoma.co.jp',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.875375918394!2d139.75751731525946!3d35.70468428018881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c3c5a500d6b%3A0xca7104bf151ceaea!2zMi1jaMWNbWUtMjItNSBIb25nxY0sIEJ1bmt5byBDaXR5LCBUxY1recWNLXRvIDExMy0wMDMzLCBKYXDDs24!5e0!3m2!1ses!2sco!4v1576099475140!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'lu',
      company: 'DELGIRO BVBA',
      address: 'Luxembourg, Luxemburgo',
      phone: '+32 (0) 475 62 0100',
      fax: '',
      web: 'www.delgiro.be',
      email: 'info@delgiro.be',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82735.31077607637!2d6.065830435993233!3d49.60758382175535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548cd9df32c57%3A0x400d1d6d1056d10!2sLuxemburgo!5e0!3m2!1ses!2sco!4v1576099530590!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'me',
      company: 'PASCAL CLAIR',
      address: 'European Business Center - Green Community Village - Dubái - Emiratos Árabes Unidos',
      phone: '+971 04 813 5899',
      fax: '+971 04 813 5898',
      web: 'www.pascalclair.com',
      email: 'pascal@pascalclair.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.877428250431!2d55.15225371500567!3d25.004280583986283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f72595c21a2c7%3A0x541547da78266a1a!2sEuropean%20Business%20Center!5e0!3m2!1ses!2sco!4v1576099565849!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'nl',
      company: 'DELGIRO BVBA',
      address: 'Netherlands',
      phone: '+32 (0) 475 62 0100',
      fax: '',
      web: 'www.delgiro.be',
      email: 'info@delgiro.be',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504542.7488137437!2d3.036928238280938!3d52.19173502356913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3db87e4bb%3A0xb3a175ceffbd0a9f!2sPa%C3%ADses%20Bajos!5e0!3m2!1ses!2sco!4v1576099592543!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'ro',
      company: 'DUPONT EXIM SRL',
      address: 'Str.Drumul Gilâului nr.7 Sector 4',
      phone: ' 031 438 2967/073 128 0165',
      fax: '',
      web: 'www.dupont-ingredient.ro',
      email: 'comenzi@dupont-ingredient.ro',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.913904724109!2d26.118546115521266!3d44.37335817910319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe052fdec29b%3A0xe46f940bb17b1bdd!2zRHJ1bXVsIEdpbMSDdWx1aSA3LCBCdWN1cmXImXRpLCBSdW1hbsOtYQ!5e0!3m2!1ses!2sco!4v1576099628749!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'ru',
      company: 'ASCOL',
      address: 'Elektrozavodskaya Street 20, Str. 1, of. 203',
      phone: '+7 (495) 780 6735',
      fax: '+7 (495) 780 6734',
      web: 'www.ascol.ru',
      email: 'es@ascol.ru',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.283431430874!2d37.704438415931975!3d55.78831618056286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535735cf7726b%3A0x92cfa5ee76ac9610!2sAskol%20Ooo!5e0!3m2!1ses!2sco!4v1576099667347!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'sk',
      company: 'LYRA CHOCOLATE – SWEETPRO S.R.O.',
      address: 'Konecna2, 95112 Ivanka pri',
      phone: '00421 903 964 544',
      fax: '',
      web: 'www.lyrachocolate.com',
      email: 'info@lyrachocolate.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.5403652337372!2d18.12568271565243!3d48.23472457923129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b163cee7770b9%3A0x4190e2070594d160!2sKone%C4%8Dn%C3%A1%202%2C%20951%2012%20Ivanka%20pri%20Nitre%2C%20Eslovaquia!5e0!3m2!1ses!2sco!4v1576099707939!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'tw',
      company: 'ANDY CONCEPT CO., LTD',
      address: 'Unit 8, Floor 15, No.99, Sec 1, Xintai 5th Rd., Xizhi Dist., New Taipei City 22175 TAIWAN,R.O.C',
      phone: '+886-2-26972626',
      fax: '+886-2-26972709',
      web: 'http://andyconcept.com.tw/',
      email: 'andy.concept@outlook.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462784.5146940159!2d121.22618611500236!3d25.016963856450708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac72bce20a99%3A0x3f6a35cedd0ac2e0!2zVGFpcMOpaSwgVGFpd8Ohbg!5e0!3m2!1ses!2sco!4v1576099768590!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'ua',
      company: 'MAGNUM SP',
      address: 'Str. Kuibyshev 9, 1st floor, office 7',
      phone: '+38067579-17-73, +38067575-30-82',
      fax: '',
      web: 'magnum-sp.com.ua',
      email: 'magnum-nm@ukr.net',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152816.67995854255!2d50.1164439!3d53.2400672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416618e22bd879d3%3A0xba95cda9bb3a030b!2sSamara%2C%20%C3%93blast%20de%20Samara%2C%20Rusia!5e0!3m2!1ses!2sco!4v1576099800838!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'uk',
      company: 'MSK SPECIALIST INGREDIENTS',
      address: 'Office Suite A Sheepbridge Business Park, Sheepbridge Lane',
      phone: '44 0 124 6 41 221',
      fax: '',
      web: 'msk-ingredients.com',
      email: 'deborah.prynne@msk-ingredients.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2386.0005171904445!2d-1.4426368841643693!3d53.2716103799634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487984c0e3cc8521%3A0x403cb7ba297d274e!2sSheepbridge%20Business%20Centre!5e0!3m2!1ses!2sco!4v1576103954580!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'uk',
      company: 'HB INGREDIENTS',
      address: 'Cocoa House, 15 The cliffe Industrial Estate, Lewes, East Sussex, BN8 6JL, UK',
      phone: '44 0 845 8800799',
      fax: '',
      web: 'www.hbingredients.co.uk',
      email: 'sales@hbingredients.co.uk',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.9998253340914!2d0.022610315746572976!3d50.8682029795352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df62eaeedc524f%3A0xe349659ecac6be58!2sHB%20Ingredients!5e0!3m2!1ses!2sco!4v1576099862092!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'uk',
      company: 'KEYLINK',
      address: '99 Green Lane, Sheffield, Reino Unido',
      phone: '+44 (0) 114 245 5400',
      fax: '',
      web: 'www.keylink.org',
      email: 'julie@keylink.org',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.5400208537358!2d-1.4549359841579816!3d53.44093227999899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487979c740b0d583%3A0xc0160ecd71f67af3!2s99%20Green%20Ln%2C%20Sheffield%2C%20Reino%20Unido!5e0!3m2!1ses!2sco!4v1576104505064!5m2!1ses!2sco',
      selected: false
    },
    {
      country: 'us',
      company: 'IFIGOURMET',
      address: '760 Lakeside Drive, Unit A, Gurnee, IL 60031',
      phone: '847.855.7400',
      fax: '',
      web: 'www.ifigourmet.com',
      email: 'customerservice@ifigourmet.com',
      urlMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.630275597935!2d-87.95144528454334!3d42.3717180791861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f91e14084d0a1%3A0xd903a29e781814b9!2s760%20Lakeside%20Dr%20Unit%20A%2C%20Gurnee%2C%20IL%2060031%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1576099935568!5m2!1ses!2sco',
      selected: false
    }
  ]
  countries = [
    {
      name: 'ARGENTINA',
      abrev: 'ar'
    }, {
      name: 'AUSTRALIA',
      abrev: 'au'
    }, {
      name: 'BAHRAIN',
      abrev: 'bh'
    }, {
      name: 'BELGIUM',
      abrev: 'be'
    }, {
      name: 'BRAZIL',
      abrev: 'br'
    }, {
      name: 'CANADA',
      abrev: 'ca'
    }, {
      name: 'CHILE',
      abrev: 'cl'
    }, {
      name: 'COLOMBIA',
      abrev: 'co'
    }, {
      name: 'CZECH REPUBLIC',
      abrev: 'cz'
    }, {
      name: 'FRANCE',
      abrev: 'fr'
    }, {
      name: 'GERMANY',
      abrev: 'de'
    }, {
      name: 'GREECE',
      abrev: 'gr'
    }, {
      name: 'GUATEMALA',
      abrev: 'gl'
    }, {
      name: 'HUNGARY',
      abrev: 'hu'
    }, {
      name: 'ITALY',
      abrev: 'it'
    }, {
      name: 'JAPAN',
      abrev: 'jp'
    }, {
      name: 'LUXEMBOURG',
      abrev: 'lu'
    }, {
      name: 'MIDDLE EAST',
      abrev: 'me'
    }, {
      name: 'NETHERLANDS',
      abrev: 'nl'
    }, {
      name: 'ROMANIA',
      abrev: 'ro'
    }, {
      name: 'RUSSIA',
      abrev: 'ru'
    }, {
      name: 'SLOVAK REPUBLIK',
      abrev: 'sk'
    }, {
      name: 'TAIWAN',
      abrev: 'tw'
    }, {
      name: 'UKRANIE',
      abrev: 'ua'
    }, {
      name: 'UNITED KINGDOM ',
      abrev: 'uk'
    }, {
      name: 'UNITED STATES',
      abrev: 'us'
    }
  ]
  handleChange = (value) => {
    console.log(value);
    this.setState({
      distValue: value
    }, () => {
      this.selectDistributorCountry();
    })
  }

  selectDist = (value) => {
    this.setState({ distSelected: value })
  }

  selectDistributorCountry() {
    let arr = this.distributors.filter(e => e.country.includes(this.state.distValue));
    this.setState({ actualDist: arr });
  }

  componentDidMount() {
    this.selectDistributorCountry();
  }
  render() {
    const { distValue, actualDist, distSelected } = this.state;
    const { Option } = Select;
    return (
      <div className="modal-dist">
        <div className="modal-dist-list">
          <div className="modal-dist-list-header">
            <h2>Distributors</h2>
            <Select size='small' defaultValue="co" style={{ width: 150 }} value={distValue} onChange={this.handleChange}>
              {Object.keys(this.countries).map(i =>
                <Option key={i} value={this.countries[i].abrev} key={i}>{this.countries[i].name}</Option>
              )}
            </Select>
          </div>
          <div className="modal-dist-list-cards">
            {Object.keys(actualDist).map(i =>
              <div key={i} className={`modal-dist-list-cards-card modal-dist-list-cards-card--${i == distSelected && 'active'}`} onClick={() => this.selectDist(i)}>
                <h2>{actualDist[i].company}</h2>
                <p><span>Address: </span>{actualDist[i].address}</p>
                <p><span>Phone: </span>{actualDist[i].phone}</p>
                <p><span>Web: </span><a href={'https://' + actualDist[i].web} target='_blank'>{actualDist[i].web}</a> </p>
                <p><span>E-mail: </span> {actualDist[i].email}</p>
              </div>
            )}
          </div>
        </div>
        <div className="modal-dist-map">
          {actualDist.length > 0 &&
            <iframe src={actualDist[distSelected].urlMap} width="100%" height="100%" style={{ border: 0 }} ></iframe>
          } {/*<iframe src={'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26254.56544788482!2d-58.6461502!3d-34.6592313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7552e6fa7b1%3A0x1841999274f45828!2sEspronceda%20632%2C%20B1712JUC%20Castelar%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sco!4v1576088872164!5m2!1ses!2sco'} width="100%" height="100%" style={{ border: 0 }} ></iframe>*/}
        </div>
      </div>
    );
  }
};

export default ModalDistributors;