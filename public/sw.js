if(!self.define){let e,a={};const r=(r,s)=>(r=new URL(r+".js",s).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let f={};const d=e=>r(e,c),n={module:{uri:c},exports:f,require:d};a[c]=Promise.all(s.map((e=>n[e]||d(e)))).then((e=>(i(...e),f)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404-error-roomcss/LICENSE.txt",revision:"07824e6a4f64b7da23647d2239771448"},{url:"/404-error-roomcss/README.md",revision:"81d8c08ec734c169af209c497de4861b"},{url:"/404-error-roomcss/dist/index.html",revision:"98e228de3feb69299f4d9a7b8676ce04"},{url:"/404-error-roomcss/dist/style.css",revision:"579da6dcb384710696a54d4ff300376b"},{url:"/404-error-roomcss/src/index.html",revision:"850eb2b47e8018c4ecc562fc404ec725"},{url:"/404-error-roomcss/src/style.css",revision:"579da6dcb384710696a54d4ff300376b"},{url:"/_next/static/MgD_5Ge5lu4s-wU1pMav5/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/MgD_5Ge5lu4s-wU1pMav5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/161-d8ee3662d2e637b1.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/2002-4fd4ec046e101d73.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/2128-4c450143e74f5b42.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/2167-6710666335b5192b.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/231-cacc75de47007a42.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/2967-5f35fc60439d5ab4.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/3396-16551b352982725f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/3800-005cd6a8e1a96660.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/4066-2b472ed52fb9915d.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/4178-c13a839b1acd005f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/4247-782312b8dde6fcbd.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/5190-c90a53c5a948908b.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/5685-95ed6290efeecd88.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/6150-10942f899531f3de.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/6863-6f5acbaa1016b3f5.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/9397-be820ddb1fee64dc.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/994-d8a82264021a1acd.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/998-ad0a2ffcbab46126.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/%5Buser%5D/page-fc3f0cabac30cb8f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/invite/page-43edeaa94bfe0019.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/join/layout-57e8c8b485c033c4.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/join/page-59ba64547a370ad2.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/login/page-79fe003f42e5eac1.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(auth)/logout/page-dfc802f40eda5e84.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(cdn)/cdn/test/page-6d46dd2be54daf52.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(cdn)/json/page-2ce86cacf98c5546.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(cdn)/mediaguruploader/page-3dc18a74c38458be.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/Chirp/page-f3f06ac9bdabb5b4.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/article/%5Bid%5D/loading-1a3149506ecf3361.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/article/%5Bid%5D/page-49a08310d277b6a9.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/articles/page-9b708a338d841248.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/communities/page-a8084b1326422d9c.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/explore/page-978571bd1ab7cf19.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/home/page-4acfc28177e9bef5.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/images/page-1ff54d9ce6c6ba39.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/text/page-f6002ffe29ede58f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/videos/new/page-8f36584371e6c6a7.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/videos/page-1a0830d8d2ef3ecf.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/visuals/page-11346f9f8b0fef15.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/voice/page-15c6898ba739cd19.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/watch/%5Bid%5D/page-af7ac83460b96a85.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/(sections)/watch/page-a6e9ae51a7307b13.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/account/page-0fb8491f07ef7a17.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/ai/page-8540e7261996fbf2.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/archive/page-9387ff53801b64df.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/bank/page-fa16616830fadc8d.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/chat/page-4f1d69a595c2f48f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/editors-pick/page-7ed9a38ac6aca6b7.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/events/page-c55f0b0794dafe80.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/notifications/page-fdb84446a9bc8c76.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/open-book/page-efb79709b00f9f79.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/planer/page-ff6971b53b9c979e.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/settings/page-8db17ac3a50f45ee.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/tools/page-dd9a08a67de9e439.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/(services)/web/page-4be6ce693043e009.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/_not-found/page-baaf17f39435a373.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/api/session/page-361f4b31f7c53f42.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/edit/%5Bid%5D/page-9f4a0e378979066d.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/layout-e23ea0efa52af05e.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/loading-506271d235b201db.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/new/article/page-d196b4397e8f29e6.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/new/image/page-a1f5c3acdda6c188.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/new/page-3f7bacebe79399e9.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/new/video/page-7cae8f58d2162a19.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/offline/page-0940207a826d0f98.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/page-806e5a2b551332ba.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/release/%5B...id%5D/loading-7886bf42f38dba3f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/app/release/%5B...id%5D/page-8b93595c3f144c1c.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/fd9d1056-81a530d22cd63fce.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/main-app-cde9b3d8f699f508.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/main-df9e4dc50c0293fb.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-5ea18d9176401918.js",revision:"MgD_5Ge5lu4s-wU1pMav5"},{url:"/_next/static/css/2ac15d7653257438.css",revision:"2ac15d7653257438"},{url:"/_next/static/css/67416d77d4960ab3.css",revision:"67416d77d4960ab3"},{url:"/_next/static/css/6bcdf341053eb4f5.css",revision:"6bcdf341053eb4f5"},{url:"/_next/static/css/7f17f13225203066.css",revision:"7f17f13225203066"},{url:"/_next/static/media/16c869df9312b709-s.woff2",revision:"abd93855da35eaa75cbd971b72b0e7b3"},{url:"/_next/static/media/39498105ba7af3d1-s.p.woff2",revision:"dec7681c5a35cca45de483d4e4aa7e21"},{url:"/_next/static/media/3b5fecae43c08de3-s.woff2",revision:"10bbb69f37ce73de8a6fb2b78d1b2bb0"},{url:"/_next/static/media/45dfe8fcca03f0ca-s.woff2",revision:"882e0964744b69f8125189e84028a935"},{url:"/_next/static/media/8b503118cf980c6b-s.woff2",revision:"e38efefe760db0f9f1bbdc90c85cb178"},{url:"/_next/static/media/8e123855b3027599-s.woff2",revision:"f8b88332a57d6f020460ae11f5f8783c"},{url:"/_next/static/media/e6a4c951fdbd2d94-s.woff2",revision:"adfc9029f5802952cb32f62d320a4d53"},{url:"/_next/static/media/f4aa63ba2cf4d979-s.woff2",revision:"309a533ed1f22def8005792bed0ef6a5"},{url:"/_next/static/media/f686a73ef698d4bc-s.p.woff2",revision:"28b2a84a7d8e0b9dd5d8734192cc1c43"},{url:"/ads.txt",revision:"55a012831b963506676868e27f29038e"},{url:"/author-avatar.jpg",revision:"30c9e0d5f47bf53d1dc9ade97dadbc43"},{url:"/b2.jpeg",revision:"5fe0712772af212847a4a4b2538cee44"},{url:"/blog-post-1.jpg",revision:"5e0538ec3749f3064324603e4fbc9d82"},{url:"/blog-post-2.jpg",revision:"95a7b8159b777f8ddd59cba17effac2d"},{url:"/blog-post-3.jpg",revision:"c78ccbeae7f4446786d3197e7197d2f8"},{url:"/blog-post-hero.jpg",revision:"c4afa323626fa17186b0cd88821e9984"},{url:"/blurred.jpeg",revision:"33b29f243655c2bb7f9528974fd28365"},{url:"/data.json",revision:"67a1a08c5d0638f0af254d6c0243696d"},{url:"/feather/activity.svg",revision:"ec2ea5c1a9894b6bef25afd1c555e627"},{url:"/feather/airplay.svg",revision:"a970588fe4709bd1ab8b2595a6012770"},{url:"/feather/alert-circle.svg",revision:"3c85352a808086b3f6f28a87b9fbc9f9"},{url:"/feather/alert-octagon.svg",revision:"dc0651176a09d7dea3fae870ecc7b0b9"},{url:"/feather/alert-triangle.svg",revision:"fc8aba7fb279fe57e9797e9a6d3340f4"},{url:"/feather/align-center.svg",revision:"6f1e7ed52cb0b15945394e8138ac7ff1"},{url:"/feather/align-justify.svg",revision:"6ba9e0e035a7e3f3f901e6e768e97918"},{url:"/feather/align-left.svg",revision:"977975285b55cc5c13f4dc05b67a99fa"},{url:"/feather/align-right.svg",revision:"11e4ecfb6bc761bc8823a3565d7604bc"},{url:"/feather/anchor.svg",revision:"462e93ed4d0af90699883f1cc1a352ff"},{url:"/feather/aperture.svg",revision:"2a8578ce0476e62f63b51908bc62e1b8"},{url:"/feather/archive.svg",revision:"97582ec644cb63896869c761152ece1a"},{url:"/feather/arrow-down-circle.svg",revision:"b2066acf199315ed7da9990cf5f9150f"},{url:"/feather/arrow-down-left.svg",revision:"2241203645dc9877b3a66384302c8a6e"},{url:"/feather/arrow-down-right.svg",revision:"ca329fd9d17929ea465ee4c8535a46d0"},{url:"/feather/arrow-down.svg",revision:"15251d3fbdce3b5d4251e67de24076d2"},{url:"/feather/arrow-left-circle.svg",revision:"d14a04844ca29b5b3994f22631295ebf"},{url:"/feather/arrow-left.svg",revision:"f9a44e1ccb9f44cd4de1da8fe7f6f4d8"},{url:"/feather/arrow-right-circle.svg",revision:"bdbb0ef6a4d501b308160ed3143604bb"},{url:"/feather/arrow-right.svg",revision:"dc372a07777e87891aaac087cfbe60ad"},{url:"/feather/arrow-up-circle.svg",revision:"4bf0e3b8c5a2fcdb5a868ce286d407ed"},{url:"/feather/arrow-up-left.svg",revision:"1022bb6ff7bde3560c19849aa599727d"},{url:"/feather/arrow-up-right.svg",revision:"1e0b3551dbd5b5a3ead4b0802182bff8"},{url:"/feather/arrow-up.svg",revision:"b380d955cce39bf34b884be927997370"},{url:"/feather/at-sign.svg",revision:"006caf8bc5f3b93730e05f61fae81a92"},{url:"/feather/award.svg",revision:"0cf9a246aebd95c3768bfdbf58e8bf95"},{url:"/feather/bar-chart-2.svg",revision:"6c44238fa45a1fe98f937b1d59da826d"},{url:"/feather/bar-chart.svg",revision:"c4da60fd9d4527a604375fb7f933dbf8"},{url:"/feather/battery-charging.svg",revision:"75100ee8ca76dbf7c5f4d7f13c98cfd1"},{url:"/feather/battery.svg",revision:"743fe9931f12d6af53f97b396770ea61"},{url:"/feather/bell-off.svg",revision:"bc81ff68da34b0bb22e97ff9d84a1592"},{url:"/feather/bell.svg",revision:"86facaccbf1a6c7def3651ff56008134"},{url:"/feather/bluetooth.svg",revision:"670e3a2d0b7f920ca7395e8a8abf9d0d"},{url:"/feather/bold.svg",revision:"52d38f023131c09408929ad54990bf1b"},{url:"/feather/book-open.svg",revision:"e8c7fe4e55ce6b35703f600293e88a3f"},{url:"/feather/book.svg",revision:"b40767c758a19c9bfe3b3313897c82d2"},{url:"/feather/bookmark.svg",revision:"440d73ce31deabccf2fb3d4ffc35ce82"},{url:"/feather/box.svg",revision:"310d8273fe320e6b535fb5af8b46aaea"},{url:"/feather/briefcase.svg",revision:"8aa459ae951030ec44cb20c20de623c0"},{url:"/feather/calendar.svg",revision:"b3d6e64c582711b7961aee4c427535dd"},{url:"/feather/camera-off.svg",revision:"0a1ebdacf5bec74ed3bea5568515bec2"},{url:"/feather/camera.svg",revision:"19a54509f12a3b28cbdbcbfe8fc6846f"},{url:"/feather/cast.svg",revision:"c866c851b8d704beb373e53ecc390a11"},{url:"/feather/check-circle.svg",revision:"ce63c0459a272d8301b186ec73db37e7"},{url:"/feather/check-square.svg",revision:"75b12164616257bceae82fb73136e7ec"},{url:"/feather/check.svg",revision:"10a5b071548379871a331ddae24e289f"},{url:"/feather/chevron-down.svg",revision:"c66b213d1dfff391c61146727032f068"},{url:"/feather/chevron-left.svg",revision:"5727f869509c87f4d25c2225f0968573"},{url:"/feather/chevron-right.svg",revision:"9c59704b1de34c9fbb54c100b907ac85"},{url:"/feather/chevron-up.svg",revision:"90f47098c8908802053427f30191c643"},{url:"/feather/chevrons-down.svg",revision:"c6b3b8ec519e32cee0e447216bb4ca24"},{url:"/feather/chevrons-left.svg",revision:"4a2a0b47901dbd239c6f5ad4ef14ce0a"},{url:"/feather/chevrons-right.svg",revision:"7828171283ccd305e7bbc09475d77584"},{url:"/feather/chevrons-up.svg",revision:"ca9b1d7e739445254b9b4bb16e9a9c82"},{url:"/feather/chrome.svg",revision:"a5d1d4e85190514802109d7e61733158"},{url:"/feather/circle.svg",revision:"d3a070848269031d2d69df7a697405a5"},{url:"/feather/clipboard.svg",revision:"9238e2eeed039fae29c7bde605dd70da"},{url:"/feather/clock.svg",revision:"ea3f87d138d7aecf39f43afa7707da47"},{url:"/feather/cloud-drizzle.svg",revision:"8c26f7e657e3b21010ba98f46c7fc1ba"},{url:"/feather/cloud-lightning.svg",revision:"789f759d7f213677fdf7f6447a6c6faf"},{url:"/feather/cloud-off.svg",revision:"bb8229da8987ca6099831cdaea40b517"},{url:"/feather/cloud-rain.svg",revision:"ffcc0fba43d49cb698969e219eeb2537"},{url:"/feather/cloud-snow.svg",revision:"0722b483c00bb657661b57338f38310f"},{url:"/feather/cloud.svg",revision:"6c5be50fc7b23e0bafe12390b7c837d8"},{url:"/feather/code.svg",revision:"d7ef8adba1aa16a74b91b787cde50f45"},{url:"/feather/codepen.svg",revision:"2d25e52d6c6a1693fec3aa260ac1b3c0"},{url:"/feather/codesandbox.svg",revision:"0a83e818381008df478da9653a3b3422"},{url:"/feather/coffee.svg",revision:"7b0396d76a864e1c3f06fb688449c0a7"},{url:"/feather/columns.svg",revision:"f061f0319b3f6e1e9894bb61f5455968"},{url:"/feather/command.svg",revision:"f60843945aefa6b2036c2629f471cb7d"},{url:"/feather/compass.svg",revision:"1d4ab0808ed85d8b7bf52b4a7acb9b11"},{url:"/feather/copy.svg",revision:"745449c2d1946743699328ae1701c956"},{url:"/feather/corner-down-left.svg",revision:"7c9546e392fb2e0584ec7a44a26db769"},{url:"/feather/corner-down-right.svg",revision:"299306a27a8df368d4968566cc59e3ac"},{url:"/feather/corner-left-down.svg",revision:"26b054f121b24d0345afe76392b2a1dc"},{url:"/feather/corner-left-up.svg",revision:"f3e96fc5811b5b7bfdeade84cf232744"},{url:"/feather/corner-right-down.svg",revision:"21c006a7b908a78ed704d93db33cd8c6"},{url:"/feather/corner-right-up.svg",revision:"4df81bc0484060ca73f63b6d9e9aee78"},{url:"/feather/corner-up-left.svg",revision:"2db0e8cf001eddd3c9a352b4d0c76fe5"},{url:"/feather/corner-up-right.svg",revision:"b2d9dd711e6158fc0bb6bf8ad120a6dd"},{url:"/feather/cpu.svg",revision:"771256a9801840a5b2b56e21de583b2f"},{url:"/feather/credit-card.svg",revision:"47905edec77eed1f71b823237faf359c"},{url:"/feather/crop.svg",revision:"ebc25269edf43aecab705a4cdf6ffae3"},{url:"/feather/crosshair.svg",revision:"1c802f704720f545670b94aa85e09633"},{url:"/feather/database.svg",revision:"fc71243e77efb6f04b0c54b657f1e1e1"},{url:"/feather/delete.svg",revision:"7c9993e17c1c8bc0232d7381a92f5920"},{url:"/feather/disc.svg",revision:"ffaee5053d0d4913e3791d18c2924328"},{url:"/feather/divide-circle.svg",revision:"c9e501c56feefb372c8cd734fb5c7703"},{url:"/feather/divide-square.svg",revision:"d3a6dcf8a30452c53bfb509075c77be3"},{url:"/feather/divide.svg",revision:"72813f24906cc667b332fdbebbe32d8f"},{url:"/feather/dollar-sign.svg",revision:"cbeab2705cd1a8c5d774eac8ed9c9619"},{url:"/feather/download-cloud.svg",revision:"743d6d35b3e641d0782b932b2dc36085"},{url:"/feather/download.svg",revision:"ce2002cf2b1ff34be6c693d4bc3f025d"},{url:"/feather/dribbble.svg",revision:"797b62c4841bff19bdb04fdf99ab023b"},{url:"/feather/droplet.svg",revision:"55255027247d17ff8dc33002343f3104"},{url:"/feather/edit-2.svg",revision:"f256ba958bdce3fac27cf8cfd42a734d"},{url:"/feather/edit-3.svg",revision:"54179a336d4b61f0960f83b614b194b3"},{url:"/feather/edit.svg",revision:"7a14112e034b1826aea15a675307768e"},{url:"/feather/external-link.svg",revision:"ac05cd4fcb0cd58ddb90c1cecf80f77e"},{url:"/feather/eye-off.svg",revision:"c68b9e9b64c0d3a41be7c02ec81c76dd"},{url:"/feather/eye.svg",revision:"62517b9ba0aa6eb7d9a48cd982b9fa77"},{url:"/feather/facebook.svg",revision:"180a6ca60002b6b9a88b1977232f25fb"},{url:"/feather/fast-forward.svg",revision:"13963ab2c455602e57e8163ae5cdb848"},{url:"/feather/feather.svg",revision:"df8432b4995cf4b47e2f89912f4a70b7"},{url:"/feather/figma.svg",revision:"3d05a5c2bba4b6d1bfb7d5d744215790"},{url:"/feather/file-minus.svg",revision:"5a7f514ddaf1d4faac8ec4385478208f"},{url:"/feather/file-plus.svg",revision:"331870875d74c527f367d2aab5e81487"},{url:"/feather/file-text.svg",revision:"09f0201e92b42591f3c447f7cd8704aa"},{url:"/feather/file.svg",revision:"5bd43cb8b8867e4a118ea17495d4d80a"},{url:"/feather/film.svg",revision:"5e57d8a2f28343d26b60da4662e5a077"},{url:"/feather/filter.svg",revision:"4e108bf9f89d0d4da12533b98d5579c9"},{url:"/feather/flag.svg",revision:"e82605c7d2dae238c36c9a96e3b46d03"},{url:"/feather/folder-minus.svg",revision:"35c453808f537a8d964953195e82c86d"},{url:"/feather/folder-plus.svg",revision:"819e77a4dd1b924f84a5c1d4610d426d"},{url:"/feather/folder.svg",revision:"24a5a3955ab0c15f5d6cd9bffadaf8b5"},{url:"/feather/framer.svg",revision:"7ca8baf422ef6ae898f1361f1b102770"},{url:"/feather/frown.svg",revision:"7ab5802237528b51085fcb3f56fe4b7a"},{url:"/feather/gift.svg",revision:"ca06377d8c3a01d2544caabfb1b7ab2e"},{url:"/feather/git-branch.svg",revision:"9a8c65efdbf530e9d73126925fa02ff1"},{url:"/feather/git-commit.svg",revision:"00746f95a109efd22df9f32a663bf1c9"},{url:"/feather/git-merge.svg",revision:"829cc31ddac0b2994dd328591d400949"},{url:"/feather/git-pull-request.svg",revision:"b45044430398b6938d00b1e6fa6325ac"},{url:"/feather/github.svg",revision:"5cff78e44ca42e5026f832f7b41fb018"},{url:"/feather/gitlab.svg",revision:"b13af590b9081b2a5518f65360d47022"},{url:"/feather/globe.svg",revision:"50d70b6d317e305a5bf6c16ba4ad829e"},{url:"/feather/grid.svg",revision:"0ed557634d8188927f2fb753b6348780"},{url:"/feather/hard-drive.svg",revision:"a27fc2792d24e2b4d600e4a72afcfccb"},{url:"/feather/hash.svg",revision:"e367aa38cdf51d2c9d848745037a9645"},{url:"/feather/headphones.svg",revision:"e3f2c527e5ecb7c55c96a7e708e91a4d"},{url:"/feather/heart.svg",revision:"502189aef3b96acbcddedbb54a043638"},{url:"/feather/help-circle.svg",revision:"a217347ffcb76aae5aee5d7c426354c2"},{url:"/feather/hexagon.svg",revision:"2d95a138ebf8804321d33a398dedf3a5"},{url:"/feather/home.svg",revision:"55644be0d4a9382b8f1b58830cd536c6"},{url:"/feather/image.svg",revision:"117a6d3e229a96ad0e0d0876352566e2"},{url:"/feather/inbox.svg",revision:"8c292cbc3a2a63d64ef7b660cc335a83"},{url:"/feather/info.svg",revision:"47197c1b08305d5037d8bc783bbba9c7"},{url:"/feather/instagram.svg",revision:"7c6e51dced0af371e3b62c5b4ddb9f51"},{url:"/feather/italic.svg",revision:"c46b9c4a4626ffe6ae65121427a37f2c"},{url:"/feather/key.svg",revision:"94cde88c00b9c232c0751281108c28a4"},{url:"/feather/layers.svg",revision:"ffd63d5c3b1092df4263d7d1d9e1b69c"},{url:"/feather/layout.svg",revision:"8a437d552868c3bb65039b896fddc74a"},{url:"/feather/life-buoy.svg",revision:"49eae19179ba495406c4493935c22f45"},{url:"/feather/link-2.svg",revision:"63d032dd8a5ceef8d2f2bfa32124e020"},{url:"/feather/link.svg",revision:"8a34b88dea4859ce46416e71841f00be"},{url:"/feather/linkedin.svg",revision:"beb7135630c8d3725bc3571be62ad56a"},{url:"/feather/list.svg",revision:"7da6f7a2623bd10a115cd15fc30b69e6"},{url:"/feather/loader.svg",revision:"d4857d8daf2d8c2823bb48cae80908e7"},{url:"/feather/lock.svg",revision:"85dbc3f3e2fee7e8a67b3627ad00c955"},{url:"/feather/log-in.svg",revision:"6c3aec23252e8674def010db7d1c3b78"},{url:"/feather/log-out.svg",revision:"8d50976436d9751860945033addfe6e6"},{url:"/feather/mail.svg",revision:"20e8982ec7e03638afe27f5c3e897681"},{url:"/feather/map-pin.svg",revision:"b2f804bda31dee415fc2b1ff7ba9315f"},{url:"/feather/map.svg",revision:"b5eef698940056438ffadd0216c1e2b2"},{url:"/feather/maximize-2.svg",revision:"8ccdd199b5c03e5938b3690fa836f77b"},{url:"/feather/maximize.svg",revision:"f7c1938e9f2cd378b67945feff8cf13b"},{url:"/feather/meh.svg",revision:"b7a92f62b6483788e3a0c89d184366d4"},{url:"/feather/menu.svg",revision:"ca394ec8a4754ab9db293dcac626bdcb"},{url:"/feather/message-circle.svg",revision:"ebbe6d9aff08b5bab2e86f719d8ae329"},{url:"/feather/message-square.svg",revision:"42f61b6cfe834007f261ed563b6d3ad3"},{url:"/feather/mic-off.svg",revision:"5b4ef72db3eb61b7bbee497a89a346d0"},{url:"/feather/mic.svg",revision:"843100a49316ef56c40d0776bf511ed6"},{url:"/feather/minimize-2.svg",revision:"f89a7ff345bd71c253d1e752e8b501f4"},{url:"/feather/minimize.svg",revision:"5a2d7706628196eedeeca2196aa009db"},{url:"/feather/minus-circle.svg",revision:"0a9f2aecee9d382285ea9ac2503705a4"},{url:"/feather/minus-square.svg",revision:"ff9b5981b6c5db4c973f77cc6df7ad01"},{url:"/feather/minus.svg",revision:"9661ba0b1e7abb32b6b4b956d5d14899"},{url:"/feather/monitor.svg",revision:"0f1222c0565a6b56d03c740e23803859"},{url:"/feather/moon.svg",revision:"5947fcb1f570d687a211ea0bc3f8e2c5"},{url:"/feather/more-horizontal.svg",revision:"f0e83cb823af985e89d1ff48b92b5d8b"},{url:"/feather/more-vertical.svg",revision:"cb5a271abb22da2c93866b972f0f62c4"},{url:"/feather/mouse-pointer.svg",revision:"4af98ea7f8ec35d4b2f2ac7e22f2ccb4"},{url:"/feather/move.svg",revision:"6d4dde2703ff2fc17a0a9a72dfe427cb"},{url:"/feather/music.svg",revision:"0cc5337b595655a684bdf060e07e790a"},{url:"/feather/navigation-2.svg",revision:"a01d740531521a1b9138a02d44c41a42"},{url:"/feather/navigation.svg",revision:"0368b80072fdffa0b241969433952198"},{url:"/feather/octagon.svg",revision:"99886c7813b4ad2443d3ceec80b71c53"},{url:"/feather/package.svg",revision:"27529aca400444845bb9a26ed2585a49"},{url:"/feather/paperclip.svg",revision:"b4b6633630bddb2b17faef4bbff53bda"},{url:"/feather/pause-circle.svg",revision:"26764024005c3b82f9281c1f8bffc776"},{url:"/feather/pause.svg",revision:"7375c856ac1d6249eb005fb9faea66cb"},{url:"/feather/pen-tool.svg",revision:"e6eb6671100e59712fb51a636ed32e3f"},{url:"/feather/percent.svg",revision:"ad725c91de24c7db4496e1abd675edf2"},{url:"/feather/phone-call.svg",revision:"b5e84d6112ed3df82e9cd769d95a22ac"},{url:"/feather/phone-forwarded.svg",revision:"6bc578336de1e5e3a658c32bdaa8e25d"},{url:"/feather/phone-incoming.svg",revision:"1b827c4815e21e2b2ac33c55c2401673"},{url:"/feather/phone-missed.svg",revision:"430decf2805e2c94b711db9849f6114c"},{url:"/feather/phone-off.svg",revision:"3c9f577b20664c901ad75d9c3a094d63"},{url:"/feather/phone-outgoing.svg",revision:"55cac47ba9c21ca148f9197b8260dfc4"},{url:"/feather/phone.svg",revision:"2b23e08ac21b7ce2aa82dd856d314841"},{url:"/feather/pie-chart.svg",revision:"93a2fe805f95b3c24d532f395a8034a4"},{url:"/feather/play-circle.svg",revision:"36f0e6ee645c508fdc115426b87baba6"},{url:"/feather/play.svg",revision:"34df31112e5959a1e5c0abf66851818d"},{url:"/feather/plus-circle.svg",revision:"d4547011f69a9a5700f9641ae79007e8"},{url:"/feather/plus-square.svg",revision:"46ec6c72e9c46717d11a68fa94fd0b9d"},{url:"/feather/plus.svg",revision:"7c6c8212afc5044e4b60f59552e57e69"},{url:"/feather/pocket.svg",revision:"662f393586bc273b3d7613add697b3f5"},{url:"/feather/power.svg",revision:"f9fe98460d015b9e9310d37a0bdc4a07"},{url:"/feather/printer.svg",revision:"cb4092339e30e3b581db1c092e10bc20"},{url:"/feather/radio.svg",revision:"9896d2939306db0a53f573356b2fd8a9"},{url:"/feather/refresh-ccw.svg",revision:"b37b94ccc37bd052d251af89fa99c3b3"},{url:"/feather/refresh-cw.svg",revision:"4456b94689bebd334e400bc62dcdd10e"},{url:"/feather/repeat.svg",revision:"6ec5bad1cb4f3ceb32b3ac2d04c72f73"},{url:"/feather/rewind.svg",revision:"3781baac5d467bfc00e7b9bba17f1b6d"},{url:"/feather/rotate-ccw.svg",revision:"7260812bc8d1081d6602e788fecce953"},{url:"/feather/rotate-cw.svg",revision:"7909af823a83d17e021e742f6a507890"},{url:"/feather/rss.svg",revision:"9e0b66d1dd5ea38ba07f92ddec122ad4"},{url:"/feather/save.svg",revision:"dbc678ae7d9ba2f74e98c0b281202168"},{url:"/feather/scissors.svg",revision:"d8e8b827af713e29b1588559caa39afe"},{url:"/feather/search.svg",revision:"5437e5214c32dc0a8b1e3e3749edd831"},{url:"/feather/send.svg",revision:"d9f34237336fcf5138cd42bdc0bbd10a"},{url:"/feather/server.svg",revision:"4c2407bb2bec8fd1c058187733357f9d"},{url:"/feather/settings.svg",revision:"a2376801c4706998fe2373aa2dcd6770"},{url:"/feather/share-2.svg",revision:"7c7332c0ed554eab2cf1da1467260983"},{url:"/feather/share.svg",revision:"539c9f9a1aff6c51b0d36c445117be77"},{url:"/feather/shield-off.svg",revision:"859f46be81d91c5f4cd1fe0a9efb58c5"},{url:"/feather/shield.svg",revision:"171ba61fc43e1aa5851c232315001107"},{url:"/feather/shopping-bag.svg",revision:"dd75d8007592eb3928c3691e2d251294"},{url:"/feather/shopping-cart.svg",revision:"630af4013de8bee3772278ebf075f334"},{url:"/feather/shuffle.svg",revision:"db2a806396baa1706ed94f4cd0b29af5"},{url:"/feather/sidebar.svg",revision:"e45a0e7a64e083c891621aa740db74a4"},{url:"/feather/skip-back.svg",revision:"abd4d2cdc85b6523a1e51594a144f41d"},{url:"/feather/skip-forward.svg",revision:"51fefddf37541d721b0f541fa7f5e3fe"},{url:"/feather/slack.svg",revision:"88357cc63982059b0528eab6c56a5cd7"},{url:"/feather/slash.svg",revision:"c6f7141b095f6d68338e512046e2dab3"},{url:"/feather/sliders.svg",revision:"d4aabd40612fc01de3c4427a3143368a"},{url:"/feather/smartphone.svg",revision:"2b9903504f576446fc7c2bc64d64790f"},{url:"/feather/smile.svg",revision:"985edeb58320676fe52b2799f2d48e4f"},{url:"/feather/speaker.svg",revision:"64390c68a2eec81038ddd8594d9d0c9a"},{url:"/feather/square.svg",revision:"e3aa28b61ad5475db3657096d1f85820"},{url:"/feather/star.svg",revision:"ac8ea2135e1379656f02ca2eea26cc87"},{url:"/feather/stop-circle.svg",revision:"4a6442b86763bcedfb537bad51a2d0b4"},{url:"/feather/sun.svg",revision:"eafa19dde8ac0c4fda486e22a2ae2616"},{url:"/feather/sunrise.svg",revision:"97fdadc992a4e3cbb368523f1f07b707"},{url:"/feather/sunset.svg",revision:"9c33dfb8120a48b4659b60bd4a25c1d5"},{url:"/feather/table.svg",revision:"7a1cd2ed18b264dcbb5dafd5cc58cac1"},{url:"/feather/tablet.svg",revision:"3b74c4e6b1d4935768d08b2c1a5280e9"},{url:"/feather/tag.svg",revision:"9317bc9dac095723b9f4afd2abaf7b15"},{url:"/feather/target.svg",revision:"10c63764b97be3a2d64ce8491b9d96c1"},{url:"/feather/terminal.svg",revision:"8f4c670e81e5c15b19a720200d067bf0"},{url:"/feather/thermometer.svg",revision:"22d75090cda2135895764ce3a93d8472"},{url:"/feather/thumbs-down.svg",revision:"76c1523f30c09d63f7bd992d36e1923f"},{url:"/feather/thumbs-up.svg",revision:"7c39be07c180256876c1916dd658f9c1"},{url:"/feather/toggle-left.svg",revision:"8930139f7254865d0e9b1b16972c82a5"},{url:"/feather/toggle-right.svg",revision:"febc472ee78e0988ee931ba0f71d4e04"},{url:"/feather/tool.svg",revision:"d68b9b61dcd97775a3d738e59ea3880f"},{url:"/feather/trash-2.svg",revision:"5dda1f392c13650da559c222dbd37f9b"},{url:"/feather/trash.svg",revision:"e688762277044cb8758d1ee0a5909169"},{url:"/feather/trello.svg",revision:"732cf32adf63a6e862a1292d5f9febee"},{url:"/feather/trending-down.svg",revision:"49127a40575a020a21bb8f051266c197"},{url:"/feather/trending-up.svg",revision:"4e2c0a1d4a1adb1a99a69310e06fbbc7"},{url:"/feather/triangle.svg",revision:"56f409538367efb7b9a4b67552353a63"},{url:"/feather/truck.svg",revision:"e68dea64fd3b3d060126deb930314670"},{url:"/feather/tv.svg",revision:"0c2b3d75767b636d5c9f642b0c41cde0"},{url:"/feather/twitch.svg",revision:"e5a0ed1abf3e65366e133f0f4c4daa06"},{url:"/feather/twitter.svg",revision:"43449f1c48de00f0ef903fcacf487626"},{url:"/feather/type.svg",revision:"3950b751bd78d75e1fbe5bb5126897d2"},{url:"/feather/umbrella.svg",revision:"3bf744f4ed471dfbe4e61ade241aef99"},{url:"/feather/underline.svg",revision:"3a8023cee136469ea0eabe8d1edec5a3"},{url:"/feather/unlock.svg",revision:"92b19aadef037e7aa1e84919688a7736"},{url:"/feather/upload-cloud.svg",revision:"83ae95d25d9af2d8936f1316e4e7cafc"},{url:"/feather/upload.svg",revision:"14dd1331c8efa5f93a329e56662a60f1"},{url:"/feather/user-check.svg",revision:"33597ea2bd8832e0f8151d246da691a7"},{url:"/feather/user-minus.svg",revision:"7fad484d3fc1b16b62081c4dfa80d5d9"},{url:"/feather/user-plus.svg",revision:"5047d00469e004c51f6b14e245c66d6f"},{url:"/feather/user-x.svg",revision:"80ef950fdfee9a9beb870c40b9cea016"},{url:"/feather/user.svg",revision:"ed52f187b2c4aad7fd02765c9cdc2f92"},{url:"/feather/users.svg",revision:"fcd0300a6e89e7151566af47b69128d6"},{url:"/feather/video-off.svg",revision:"d9fa84312d5d1e5c4808aa24640df0c3"},{url:"/feather/video.svg",revision:"85bdb95a5b4e4c5ccd9e1290cedf2391"},{url:"/feather/voicemail.svg",revision:"ca5163523040ef0f4f6b0d8515e7cad8"},{url:"/feather/volume-1.svg",revision:"e28b2925d0a65f6d6fcba582e571a08f"},{url:"/feather/volume-2.svg",revision:"f61b1e4cd0ac470a519160f6cd0c5d04"},{url:"/feather/volume-x.svg",revision:"60183b4be77c3348c3c9041fe8ed6898"},{url:"/feather/volume.svg",revision:"ce35a355a56308363663ed7f82b07166"},{url:"/feather/watch.svg",revision:"06dd7ae631a2f49eeeed0209da0cbaf0"},{url:"/feather/wifi-off.svg",revision:"a0a885168d0f3afb997900db930300b6"},{url:"/feather/wifi.svg",revision:"45af516604a7ce84568c43e831a0347a"},{url:"/feather/wind.svg",revision:"243d3fb4d19bb50a5cd04812d106a503"},{url:"/feather/x-circle.svg",revision:"c89cb7d970a5354712a70d3cb3225308"},{url:"/feather/x-octagon.svg",revision:"f7caae726169fc92ec1f04e842e54a59"},{url:"/feather/x-square.svg",revision:"ddb8f8e88afe396cfd95326183613100"},{url:"/feather/x.svg",revision:"b0200bf7cbbb26c32989e7a0e4d19eef"},{url:"/feather/youtube.svg",revision:"1fe436a84ab9fcfd5cdb30d769c1ef0a"},{url:"/feather/zap-off.svg",revision:"a8947bb52bcf38bd5b3a72e224da9736"},{url:"/feather/zap.svg",revision:"610c57ea099bb281d3bbb3e11ad011b4"},{url:"/feather/zoom-in.svg",revision:"5a09806e2893e73bd8e31d721ea42372"},{url:"/feather/zoom-out.svg",revision:"140560148421de02d7c38919aec711fe"},{url:"/featured-post.jpg",revision:"599d156ec2b49f59147fd1e117ce677e"},{url:"/hero-image.jpg",revision:"8ab68eb3fbd2528f87175ba58b377744"},{url:"/icon-192x192.png",revision:"3bf680f39d9957dcc31c0be01e37bb0d"},{url:"/icon-256x256.png",revision:"28980fd0bcf1bbccc274acd953a33905"},{url:"/icon-384x384.png",revision:"71af81714262f4359743a2ba78f6dd22"},{url:"/icon-512x512.png",revision:"7b69b282551bc3b271f0d836f0ef9652"},{url:"/image.png",revision:"feb83d11211388425e900db6d93170b7"},{url:"/index2.html",revision:"6ff1254c00a7b030c428a293d1de5487"},{url:"/logo.png",revision:"7b69b282551bc3b271f0d836f0ef9652"},{url:"/manifest.json",revision:"13db6e1d2c8e219285b7488412e871be"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/placeholder-avatar.jpg",revision:"e9fb265003deecf88013806c11820e5b"},{url:"/placeholder-cover.jpg",revision:"92776d7e431bf875a121f787f6c0dab4"},{url:"/placeholder-user.jpg",revision:"7ee6562646feae6d6d77e2c72e204591"},{url:"/placeholder.jpg",revision:"f6840e4c478aa5db74692ffaf79bb503"},{url:"/placeholder.svg",revision:"18985cd977f3cd3636fe4f2b44a3e656"},{url:"/placeholder.svg?height=310&width=550",revision:"446325a7666c39d7f840f674836a5454"},{url:"/placeholder.svg?height=400&width=800",revision:"446325a7666c39d7f840f674836a5454"},{url:"/post-thumbnail-1.jpg",revision:"b11c3133061eb85011ffd11f94032116"},{url:"/post-thumbnail-2.jpg",revision:"d97cbe80f42f5933a6990ea4e81d0c2d"},{url:"/responsive-react-dashboard-with-tailwind.zip",revision:"62b218b066d89ff3bcd64a249bc31ed3"},{url:"/script.js",revision:"72d1b22f7c2d20206a9c3b99aed17e55"},{url:"/style.css",revision:"b12d19dc138829f9c6341b47f073a6a5"},{url:"/uploads/IMG_2025.jpg",revision:"fe5cffd2ac211b58d098c3e5d23c3829"},{url:"/uploads/logo.png",revision:"b1fb755d347b9f3d85c60cc2c6a68f8d"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:r})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&r&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:r})=>"1"===e.headers.get("RSC")&&r&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
