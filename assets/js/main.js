/* Monolith Building - shared UI interactions */

(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const LANGS = {
    en: { htmlLang: "en" },
    ru: { htmlLang: "ru" },
    hy: { htmlLang: "hy-AM" }, // Eastern Armenian
  };

  let currentLang = (()=>{
    try{
      const url = new URL(window.location.href);
      const q = url.searchParams.get("lang");
      if(q){
        if(q === "hy-AM" || q === "hy" || q === "arm" || q === "armenian") return "hy";
        if(q === "ru" || q === "russian") return "ru";
        if(q === "en" || q === "english") return "en";
      }
      const saved = localStorage.getItem("mb_lang");
      if(saved && LANGS[saved]) return saved;
    }catch(_){}
    return "en";
  })();

  const I18N = {
    en: {
      nav: { "index.html": "Home", "about.html": "About", "services.html": "Services", "portfolio.html": "Portfolio", "testimonials.html": "Testimonials", "contact.html": "Contact" },
      ctas: {
        callNow: "Call Now",
        requestConsultation: "Request Consultation",
        getQuote: "Get a Quote",
        viewPortfolio: "View Portfolio",
        seeServices: "See Services",
        exploreServices: "Explore Services",
        readTestimonials: "Read Testimonials",
      },
      pages: {
        home: {
          eyebrow: "Licensed • Insured • Built for longevity",
          h1: "Monolith Building: Built to last. Crafted to impress.",
          lead: "Premium home construction, apartment renovations, and commercial projects—delivered with meticulous detailing, clear communication, and timelines you can trust.",
          whyTitle: "Why Monolith clients choose us",
          whyLead: "You deserve a builder who respects your home, your budget, and your timeline. We combine premium craftsmanship with a calm, organized process.",
          quickTitle: "Services designed to feel premium",
          quickLead: "From ground-up builds to modern apartment refreshes and commercial improvements, we bring the same craft standards.",
          portfolioTitle: "Portfolio highlights",
          portfolioLead: "A snapshot of recent builds, renovations, and design-forward transformations.",
          testimonialsTitle: "Client testimonials",
          testimonialsLead: "What homeowners, tenants, and businesses say about the Monolith experience.",
          ctaTitle: "Ready for a premium build experience?",
          ctaLead: "Get a fast, no-pressure consultation. We’ll help you define scope, timeline, and next steps.",
          whyCards: [
            { kicker: "Build-quality process", h3: "Blueprint-to-walkthrough discipline", p: "Each step is planned, documented, and executed with precision so the final result feels effortless." },
            { kicker: "Premium communication", h3: "Weekly progress, clear decisions", p: "We keep you informed without overwhelming you—so you always know what’s happening next." },
            { kicker: "Respect & cleanliness", h3: "Clean sites, careful craftsmanship", p: "Your property is treated with care. We protect finishes, manage debris, and deliver a neat close-out." },
          ],
          quickCards: [
            { kicker: "Construction", h3: "Homes built for longevity", p: "Framing, finishing, and high-performance execution with premium materials." },
            { kicker: "Renovation", h3: "Apartment makeovers that last", p: "Kitchen, bath, layout upgrades, and modern finishes—handled end-to-end." },
            { kicker: "Design", h3: "Premium design direction", p: "Material guidance, space planning, and styling that elevates your everyday." },
          ],
        },
        about: {
          eyebrow: "Premium craft, disciplined process",
          h1: "A builder you can trust—end-to-end.",
          lead: "Monolith Building exists to make construction feel clear, premium, and respectful. From scoping and material planning to site management and final walkthrough, we lead with organization and finish-quality standards.",
          processTitle: "Our process, simplified",
          processLead: "You’ll always know the next step. We plan the work, schedule responsibly, and keep you informed with practical updates.",
          valuesTitle: "Values that show in the work",
          valuesLead: "Our standards are consistent across every build type—home, apartment, and commercial.",
          aboutCtaTitle: "Let’s build something that feels premium.",
          aboutCtaLead: "Share your goals and we’ll recommend the best path—construction, renovation, or design support.",
          processCards: [
            { kicker: "Step 01", h3: "Consult + scope", p: "We define goals, identify constraints, and propose a realistic plan for your project." },
            { kicker: "Step 02", h3: "Plan + schedule", p: "We coordinate materials, milestones, and site logistics so work stays clean and on track." },
            { kicker: "Step 03", h3: "Build + deliver", p: "Craft-first execution with progress updates, and a final walkthrough you can feel confident in." },
          ],
          premiumCards: [
            { h3: "What makes it “premium”?", p: "Premium isn’t just the finish—it’s the experience. We protect your property, verify details, and keep decisions organized so you get a result that looks intentional and feels solid." },
            { h3: "Respect for your space", p: "Clean workspace habits, careful staging, and mindful dust control help your day continue as smoothly as possible during renovation or construction." },
          ],
          valuesCards: [
            { kicker: "Craft-first", h3: "Details that hold up", p: "We build for durability, alignment, and finish quality—not just “good enough.”" },
            { kicker: "Timelines", h3: "On-time discipline", p: "Milestones, responsible scheduling, and fewer surprises across the build." },
            { kicker: "Clarity", h3: "Transparent decisions", p: "We explain options clearly so you choose confidently and move forward smoothly." },
          ],
        },
        services: {
          eyebrow: "Three ways to upgrade your space",
          h1: "Construction, renovation, and premium design.",
          lead: "Choose the outcome you want. We’ll handle the scope, scheduling, and finish quality with the same Monolith standard—so the result feels intentional from day one.",
          servicesTitle: "Pick the project outcome",
          servicesLead: "Whether you’re building fresh or modernizing what you already love, we bring premium execution and a calm, organized process.",
          cardsTop: [
            { kicker: "Construction", h3: "Premium home builds", p: "New builds with disciplined execution, durable finishes, and a premium end-to-end closeout." },
            { kicker: "Renovation", h3: "Apartment renovations", p: "Kitchens, bathrooms, layout upgrades, and modern finishes—managed carefully with clean site habits." },
            { kicker: "Design", h3: "Material & layout direction", p: "Guidance that elevates your space: palette, finishes, and layout planning that feels premium." },
          ],
          scopeTitle: "What’s included (so you’re never guessing)",
          scopeLead: "We focus on the details that protect timelines and prevent costly surprises.",
          includedCards: [
            { h3: "Clear scope & deliverables", p: "We define what’s included, what’s optional, and what decisions you’ll make." },
            { h3: "Premium finish planning", p: "Materials and finish direction are planned for consistent, elevated results." },
            { h3: "Clean site standards", p: "We manage dust, protect surfaces, and keep the workspace tidy." },
          ],
          bestCards: [
            { h3: "Best for", p: "Homeowners who want a premium finish, tenants renovating for comfort and modern style, and businesses seeking professional, minimal-disruption improvements." },
            { h3: "Ready when you are", p: "If you’re planning within the next few months, we can help you define scope and timeline so you start with confidence." },
          ],
        },
        portfolio: {
          eyebrow: "Proof of premium execution",
          h1: "Portfolio projects built for real life.",
          lead: "Filter by category, then open a project detail view to see the scope highlights we focus on.",
          title: "Browse projects",
          lead: "Want something like this? Request a consultation and we’ll map out scope and timeline.",
          filters: { all: "All", construction: "Construction", renovation: "Renovation", design: "Design" },
          viewDetails: "View details",
          projects: [
            { tag: "Construction", type: "Family Home", h3: "Modern Elevation Build", p: "Durable materials, crisp lines, and premium finishing through the final walkthrough." },
            { tag: "Renovation", type: "Apartment", h3: "Light & Space Refresh", p: "Kitchen update, flooring upgrades, and modern finish coordination—handled with care." },
            { tag: "Design", type: "Interior Upgrade", h3: "Premium Material Direction", p: "Warm palettes and balanced contrasts—so every room feels cohesive." },
            { tag: "Construction", type: "Commercial", h3: "Commercial Entry Build", p: "Durable entrance improvements executed with minimal disruption and premium finishing." },
            { tag: "Renovation", type: "Bath & Finishes", h3: "Bath Modernization", p: "Shower refresh, tile coordination, and premium details that elevate daily comfort." },
            { tag: "Design", type: "Commercial Interior", h3: "Modern Office Styling", p: "Design coordination for a premium workspace—clean palette, durable selections, and cohesive flow." },
          ],
          modalScopeTitle: "Scope highlights",
          modal: { category: "Category", location: "Location", timeline: "Timeline", fallbackTitle: "Project detail" },
          ctaTitle: "Want a project like this?",
          ctaLead: "Tell us your goals and timeline. We’ll propose the best next step—construction, renovation, or design support.",
        },
        testimonials: {
          eyebrow: "Trusted by clients",
          h1: "Client testimonials built on real experiences.",
          lead: "Construction is personal. Here’s what people notice most—clean execution, clear communication, and results that feel premium.",
          title: "What clients remember",
          lead: "Consistency across home builds, renovations, and commercial improvements.",
          cards: [
            { h3: "Clear updates, calm decisions", p: "We make it easy to move forward with practical progress and options explained upfront." },
            { h3: "Site discipline", p: "Clean workspace habits protect your home while keeping work moving efficiently." },
            { h3: "Premium results", p: "Durable materials, aligned finishes, and craftsmanship you feel in everyday use." },
          ],
          ctaTitle: "Ready to experience the difference?",
          ctaLead: "Request a consultation and we’ll recommend the best approach for your home, apartment, or commercial project.",
          testimonialTexts: [
            "The cleanest build experience we’ve had. The team was careful with every finish and the communication was always clear.",
            "Our apartment looks brand new. The layout improvements and material choices feel thoughtfully coordinated.",
            "Professional, organized, and fast. They kept our site spotless and managed decisions without pressure.",
            "The finishes are exactly what we wanted. The final result feels high-end and solid.",
            "They were fast to respond, organized with scheduling, and careful around our daily routine.",
          ],
          testimonialAuthors: ["Sarah M. — Homeowner", "Jordan T. — Tenant", "Alex R. — Business Owner", "Emily K. — Homeowner", "Morgan S. — Tenant"],
        },
        contact: {
          eyebrow: "Fast response. Premium communication.",
          h1: "Request a consultation with Monolith Building.",
          lead: "Tell us what you’re building or renovating. We’ll help define scope, timeline, and the next step—without pressure.",
          sectionTitle: "Contact & quick quote",
          sectionLead: "Prefer to talk? Use the click-to-call button. Otherwise, fill out the form and we’ll follow up shortly.",
          directTitle: "Direct lines",
          directSub: "Monolith Building supports residential and commercial projects.",
          formTitle: "Quick quote form",
          formSub: "We’ll ask a few details and follow up to schedule your consultation.",
          labels: { fullName: "Full name", email: "Email", phone: "Phone (optional)", service: "Service type", message: "Project details" },
          placeholders: {
            fullName: "Your name",
            email: "you@example.com",
            phone: "+1 (___) ___-____",
            message: "Tell us what you're planning, approximate size, and your ideal timeline.",
            service: "Select one",
          },
          options: { Construction: "Construction", Renovation: "Renovation", Design: "Design" },
          submit: "Submit request",
          callInstead: "Call Instead",
          required: "Required",
          errors: {
            name: "Please enter your name.",
            email: "Enter a valid email address.",
            phone: "Enter a valid phone number (or leave blank).",
            service: "Select a service type.",
            message: "Tell us a bit more (at least 12 characters).",
          },
          success: "Request received. We&apos;ll reach out shortly to schedule your consultation.",
          successAlt: "Prefer email?",
          successSend: "Send details",
        },
      },
    },
    hy: {
      nav: { "index.html": "Գլխավոր", "about.html": "Մեր մասին", "services.html": "Ծառայություններ", "portfolio.html": "Պորտֆոլիո", "testimonials.html": "Ակնարկներ", "contact.html": "Կոնտակտ" },
      ctas: {
        callNow: "Զանգել հիմա",
        requestConsultation: "Պահանջել խորհրդատվություն",
        getQuote: "Գնահատական ստանալ",
        viewPortfolio: "Դիտել աշխատանքները",
        seeServices: "Դիտել ծառայությունները",
        exploreServices: "Դիտել ծառայությունները",
        readTestimonials: "Կարդալ ակնարկները",
      },
      pages: {
        home: {
          eyebrow: "Լիցենզավորված • Ապահովագրված • Երկարակեցության համար",
          h1: "Monolith Building: Կառուցված է երկար ժամանակի համար։ Ստեղծված է տպավորելու համար։",
          lead: "Պրեմիում տունների կառուցում, բնակարանների վերանորոգում և կոմերցիոն նախագծեր՝ մանրակրկիտ աշխատանքով, հստակ հաղորդակցությամբ և վստահելի ժամկետներով։",
          whyTitle: "Ինչու Monolith-ի հաճախորդներն ընտրում են մեզ",
          whyLead: "Ձեզ անհրաժեշտ է կառուցող, որը հարգում է ձեր տունը, բյուջեն և ժամանակացույցը։ Մենք համատեղում ենք պրեմիում վարպետությունը՝ հանգիստ ու կազմակերպված գործընթացի հետ։",
          quickTitle: "Ծառայություններ՝ պրեմիում զգացողությամբ",
          quickLead: "Սկսած նոր կառուցումից մինչև բնակարանի թարմացում և կոմերցիոն բարելավումներ՝ պահում ենք նույն արհեստագործական չափանիշները։",
          portfolioTitle: "Պորտֆոլիոյի կարևորագույն նախագծեր",
          portfolioLead: "Վերջին շինարարական, վերանորոգման և դիզայնով իրականացված փոփոխությունների փոքրիկ ակնարկ։",
          testimonialsTitle: "Հաճախորդների ակնարկներ",
          testimonialsLead: "Ի՞նչ են ասում տնատերերը, վարձակալները և բիզնեսները՝ Monolith-ի փորձի մասին։",
          ctaTitle: "Պատրա՞ստ եք պրեմիում փորձին։",
          ctaLead: "Ստացեք արագ, առանց ճնշման խորհրդատվություն։ Մենք կօգնենք սահմանել սկոպը, ժամկետները և հաջորդ քայլերը։",
          whyCards: [
            { kicker: "Կառուցման որակյալ գործընթաց", h3: "Պլանից մինչև հանձնում՝ կարգապահություն", p: "Յուրաքանչյուր քայլ պլանավորվում, փաստաթղթավորվում և կատարվում է ճշգրիտ՝ որպեսզի վերջնական արդյունքը լինի հեշտ ու վստահելի։" },
            { kicker: "Պրեմիում հաղորդակցություն", h3: "Շաբաթական առաջընթաց, հստակ որոշումներ", p: "Մենք պահում ենք ձեզ տեղեկացված՝ առանց ավելորդ բարդության։ Այսպես դուք միշտ գիտեք, թե հաջորդ քայլը որն է։" },
            { kicker: "Հարգանք & մաքրություն", h3: "Մաքուր տեղամաս, ուշադիր վարպետություն", p: "Ձեր սեփականությունը վերաբերվում ենք խնամքով։ Մենք պաշտպանում ենք ավարտվածքները, կառավարում աղբը և ապահովում մաքուր վերջնական հանձնում։" },
          ],
          quickCards: [
            { kicker: "Կառուցում", h3: "Երկարակեցության համար կառուցված տներ", p: "Կառուցման շրջանակ, ավարտի աշխատանքներ և բարձրորակ նյութերով պրեմիում կատարում։" },
            { kicker: "Վերանորոգում", h3: "Բնակարանների թարմացում, որը երկար է տևում", p: "Խոհանոց, լոգարան, դասավորության փոփոխություններ և ժամանակակից ավարտներ՝ ամբողջական վերահսկմամբ։" },
            { kicker: "Դիզայն", h3: "Պրեմիում դիզայնի ուղղորդում", p: "Նյութերի խորհուրդներ, տարածքի պլանավորում և այնպիսի ստիլ, որը բարձրացնում է ձեր առօրյան։" },
          ],
        },
        about: {
          eyebrow: "Պրեմիում վարպետություն, հստակ ու կազմակերպված գործընթաց",
          h1: "Վստահելի կառուցող՝ ամբողջ շղթայով։",
          lead: "Monolith Building-ը գոյություն ունի, որպեսզի շինարարությունը լինի պարզ, պրեմիում և հարգալից։ Սկոպինգից և նյութերի պլանավորումից մինչև տեղամասի կառավարում և վերջնական շրջայց՝ մենք առաջնորդվում ենք կազմակերպվածությամբ և ավարտի որակային չափանիշներով։",
          processTitle: "Մեր գործընթացը՝ պարզեցված",
          processLead: "Դուք միշտ կիմանաք, թե հաջորդ քայլը որն է։ Մենք պլանավորում ենք աշխատանքը, պատասխանատու ժամանակացույց ենք կազմում և պահում ձեզ տեղեկացված՝ գործնական թարմացումներով։",
          valuesTitle: "Արժեքներ, որոնք երևում են աշխատանքում",
          valuesLead: "Մեր չափանիշները նույնն են բոլոր նախագծերի համար՝ տուն, բնակարան և կոմերցիոն։",
          aboutCtaTitle: "Թող կառուցենք մի բան, որը պրեմիում է զգացվում։",
          aboutCtaLead: "Կիսվեք ձեր նպատակներով, և մենք կառաջարկենք լավագույն ճանապարհը՝ կառուցում, վերանորոգում կամ դիզայնի աջակցություն։",
          processCards: [
            { kicker: "Քայլ 01", h3: "Խորհրդատվություն + սկոպինգ", p: "Սահմանում ենք նպատակները, բացահայտում սահմանափակումները և առաջարկում իրատեսական ծրագիր ձեր նախագծի համար։" },
            { kicker: "Քայլ 02", h3: "Պլանավորում + ժամանակացույց", p: "Համակարգում ենք նյութերը, մայլսթոնները և տեղամասային տրամաբանությունը՝ որպեսզի աշխատանքը լինի մաքուր և ժամանակին։" },
            { kicker: "Քայլ 03", h3: "Կառուցել + հանձնել", p: "Աշխատում ենք վարպետությամբ՝ առաջընթացի թարմացումներով և վստահություն տվող վերջնական շրջայցով։" },
          ],
          premiumCards: [
            { h3: "Ինչն է դարձնում «պրեմիումը»", p: "Պրեմիումը միայն ավարտը չէ—դա փորձն է։ Մենք պաշտպանում ենք ձեր սեփականությունը, ստուգում մանրամասները և պահում որոշումները կազմակերպված՝ որպեսզի ստանաք արդյունք, որը նպատակային է թվում և ամուր է զգացվում։" },
            { h3: "Ձեր տարածքի նկատմամբ հարգանք", p: "Մաքուր տեղամասային սովորությունները, խնամքով կազմակերպված փուլերը և փոշու վերահսկումը օգնում են, որ ձեր օրերը հնարավորինս սահուն անցնեն՝ վերանորոգման կամ կառուցման ժամանակ։" },
          ],
          valuesCards: [
            { kicker: "Վարպետություն՝ առաջնային", h3: "Մանրամասներ, որոնք պահում են որակը", p: "Մենք կառուցում ենք երկարակեցության, ճշտված դասավորության և ավարտի որակի համար—ոչ թե պարզապես «բավականին»։" },
            { kicker: "Ժամանակացույց", h3: "Ժամանակին կատարելու կարգապահություն", p: "Մայլսթոններ, պատասխանատու ժամանակացույց և ավելի քիչ անակնկալներ ամբողջ ընթացքում։" },
            { kicker: "Հստակություն", h3: "Թափանցիկ որոշումներ", p: "Մենք պարզ ենք բացատրում տարբերակները, որպեսզի ընտրեք վստահորեն և առաջ շարժվեք սահուն։" },
          ],
        },
        services: {
          eyebrow: "Երեք տարբերակ՝ ձեր տարածքը արդիականացնելու համար",
          h1: "Կառուցում, վերանորոգում և պրեմիում դիզայն։",
          lead: "Ընտրեք ձեր ուզած արդյունքը։ Մենք կհոգանք սկոպի, ժամանակացույցի և ավարտի որակի մասին՝ նույն Monolith չափանիշով։ Արդյունքը կլինի նպատակային՝ սկզբից։",
          servicesTitle: "Ընտրեք նախագծի արդյունքը",
          servicesLead: "Անկախ նրանից՝ կառուցում եք նոր, թե արդիականացնում ձեր սիրած տարածքը, մենք բերում ենք պրեմիում կատարում և հանգիստ, կազմակերպված գործընթաց։",
          cardsTop: [
            { kicker: "Կառուցում", h3: "Պրեմիում տնային կառուցում", p: "Նոր կառուցումներ՝ կարգապահ կատարմամբ, երկարակյաց ավարտներով և պրեմիում վերջնական հանձնումով։" },
            { kicker: "Վերանորոգում", h3: "Բնակարանների վերանորոգումներ", p: "Խոհանոց, լոգարան, դասավորության արդիականացում և ժամանակակից ավարտներ՝ խնամքով կառավարվող և մաքուր տեղամասային սովորություններով։" },
            { kicker: "Դիզայն", h3: "Նյութերի ու դասավորության ուղղորդում", p: "Ձեզ բարձրացնող ուղղորդում՝ գունային լուծումներ, ավարտներ և դասավորության պլանավորում՝ պրեմիում զգացողությամբ։" },
          ],
          scopeTitle: "Ի՞նչ է ներառված (որ երբեք չգուշակեք)",
          scopeLead: "Մենք կենտրոնանում ենք մանրամասների վրա, որոնք պաշտպանում են ժամկետները և կանխում թանկ անակնկալները։",
          includedCards: [
            { h3: "Հստակ սկոպ + դելիվերաբլներ", p: "Մենք սահմանում ենք՝ ինչն է ներառված, ինչն է կամընտիր, և ինչ որոշումներ եք դուք կայացնելու։" },
            { h3: "Պրեմիում ավարտի պլանավորում", p: "Նյութերի և ավարտի ուղղորդումը պլանավորվում է՝ որ ստանաք համահունչ, բարձրորակ արդյունք։" },
            { h3: "Մաքուր տեղամասային չափանիշներ", p: "Մենք կառավարում ենք փոշին, պաշտպանում ենք մակերեսները և պահում ենք աշխատատեղը մաքուր։" },
          ],
          bestCards: [
            { h3: "Ո՞ւմ համար է լավագույն", p: "Տնատերերի համար՝ պրեմիում ավարտ են ուզում, վարձակալների համար՝ հարմարավետ և ժամանակակից ոճով վերանորոգում, և բիզնեսների համար՝ պրոֆեսիոնալ բարելավումներ՝ նվազագույն խանգարումներով։" },
            { h3: "Պատրաստ ենք, երբ դուք պատրաստ լինեք", p: "Եթե նախատեսում եք մի քանի ամսվա ընթացքում, կօգնենք սահմանել սկոպը և ժամանակացույցը, որպեսզի սկսեք վստահորեն։" },
          ],
        },
        portfolio: {
          eyebrow: "Պրեմիում կատարման ապացույց",
          h1: "Պորտֆոլիոյի նախագծերը՝ իրական կյանքի համար։",
          lead: "Ընտրեք կատեգորիա, ապա բացեք նախագծի մանրամասները՝ տեսնելու այն կարևորագույն սկոպային քայլերը, որոնց վրա կենտրոնանում ենք։",
          title: "Դիտել նախագծերը",
          lead: "Ցանկանո՞ւմ եք նման բան։ Պահանջեք խորհրդատվություն, և մենք կքարտեզագրենք սկոպն ու ժամկետները։",
          filters: { all: "Բոլորը", construction: "Կառուցում", renovation: "Վերանորոգում", design: "Դիզայն" },
          viewDetails: "Դիտել մանրամասները",
          projects: [
            { tag: "Կառուցում", type: "Ընտանեկան տուն", h3: "Ժամանակակից ֆասադային կառուցում", p: "Երկարակյաց նյութեր, մաքուր գծեր և պրեմիում ավարտներ՝ վերջնական շրջայցով։" },
            { tag: "Վերանորոգում", type: "Բնակարան", h3: "Լույսի ու տարածության թարմացում", p: "Խոհանոցի թարմացում, հատակի արդիականացում և ժամանակակից ավարտների համակարգում՝ խնամքով։" },
            { tag: "Դիզայն", type: "Ներքին թարմացում", h3: "Պրեմիում նյութերի ուղղորդում", p: "Տաք գունապնակներ և հավասարակշռված հակադրություններ՝ որպեսզի յուրաքանչյուր սենյակ լինի համահունչ։" },
            { tag: "Կառուցում", type: "Կոմերցիոն", h3: "Կոմերցիոն մուտքի կառուցում", p: "Երկարակյաց մուտքային բարելավումներ՝ նվազագույն խանգարումներով և պրեմիում ավարտմամբ։" },
            { tag: "Վերանորոգում", type: "Լոգարան & ավարտներ", h3: "Լոգարանի արդիականացում", p: "Լոգարանի թարմացում, սալիկների համակարգում և պրեմիում մանրամասներ՝ ամենօրյա հարմարավետության համար։" },
            { tag: "Դիզայն", type: "Կոմերցիոն ինտերիեր", h3: "Ժամանակակից գրասենյակային ոճավորում", p: "Դիզայնային համակարգում պրեմիում տարածքի համար՝ մաքուր գունապնակ, երկարակյաց ընտրություն և համահունչ հոսք։" },
          ],
          modalScopeTitle: "Սկոպի կարևորագույն կետեր",
          modal: { category: "Կատեգորիա", location: "Տեղանք", timeline: "Ժամկետներ", fallbackTitle: "Նախագծի մանրամասներ" },
          ctaTitle: "Ցանկանո՞ւմ եք նման նախագիծ",
          ctaLead: "Կիսվեք նպատակներով և ժամկետներով։ Մենք կառաջարկենք լավագույն հաջորդ քայլը՝ կառուցում, վերանորոգում կամ դիզայնի աջակցություն։",
        },
        testimonials: {
          eyebrow: "Վստահված հաճախորդների կողմից",
          h1: "Հաճախորդների ակնարկներ՝ իրական փորձից։",
          lead: "Շինարարությունն անձնական է։ Ահա, թե ինչն են մարդիկ ամենաշատը նկատում՝ մաքուր կատակում, հստակ հաղորդակցություն և այնպիսի արդյունք, որը պրեմիում է զգացվում։",
          title: "Ինչն են հիշում հաճախորդները",
          lead: "Համապատասխանություն տունների կառուցման, բնակարանների վերանորոգման և կոմերցիոն բարելավումների մեջ։",
          cards: [
            { h3: "Հստակ թարմացումներ, հանգիստ որոշումներ", p: "Անհրաժեշտ քայլերն ավելի հեշտ են դառնում՝ գործնական առաջընթաց և տարբերակներ՝ բացատրելով սկզբից։" },
            { h3: "Տեղամասային կարգապահություն", p: "Մաքուր տեղամասային սովորությունները պաշտպանում են ձեր տունը և աշխատանքը պահում են արդյունավետ առաջընթացի մեջ։" },
            { h3: "Պրեմիում արդյունք", p: "Երկարակյաց նյութեր, ճշտված ավարտներ և վարպետություն՝ որը զգում եք ամեն օր։" },
          ],
          ctaTitle: "Պատրա՞ստ եք զգալ տարբերությունը։",
          ctaLead: "Պահանջեք խորհրդատվություն, և մենք կառաջարկենք լավագույն մոտեցումը՝ ձեր տան, բնակարանի կամ կոմերցիոն նախագծի համար։",
          testimonialTexts: [
            "Ամենամաքուր շինարարական փորձն էր, որ ունեցել ենք։ Թիմը խնամքով վերաբերվեց յուրաքանչյուր ավարտի և հաղորդակցությունը միշտ հստակ էր։",
            "Մեր բնակարանը նորից է դարձել։ Դասավորության փոփոխություններն ու նյութերի ընտրությունը զգացվում էին մտածված կերպով։",
            "Պրոֆեսիոնալ, կազմակերպված և արագ։ Նրանք պահեցին տեղամասը մաքուր ու որոշումները կառավարեցին առանց ճնշման։",
            "Ավարտները հենց այն էին, ինչ ուզում էինք։ Վերջնական արդյունքը բարձր դասի է զգացվում՝ ամուր ու վստահելի։",
            "Շատ արագ պատասխանեցին, ժամանակացույցը լավ էին կառավարում և խնամքով էին մեր առօրյայի նկատմամբ։",
          ],
          testimonialAuthors: ["Սառա Մ. — Տնատեր", "Ջորդան Թ. — Վարձակալ", "Ալեքս Ռ. — Բիզնեսի սեփականատեր", "Էմիլի Կ. — Տնատեր", "Մորգան Ս. — Վարձակալ"],
        },
        contact: {
          eyebrow: "Արագ արձագանք. Պրեմիում հաղորդակցություն.",
          h1: "Պահանջեք խորհրդատվություն Monolith Building-ից։",
          lead: "Ասեք՝ ինչ եք կառուցում կամ վերանորոգում։ Մենք կօգնենք սահմանել սկոպը, ժամկետները և հաջորդ քայլը՝ առանց ճնշման։",
          sectionTitle: "Կոնտակտ & արագ հայտ",
          sectionLead: "Ուզո՞ւմ եք խոսել։ Օգտվեք զանգի կոճակից։ Հակառակ դեպքում լրացրեք ձևը և մենք շուտով կապ կհաստատենք։",
          directTitle: "Ուղիղ կապ",
          directSub: "Monolith Building-ը աջակցում է բնակելի և կոմերցիոն նախագծերին։",
          formTitle: "Արագ հայտ",
          formSub: "Մի քանի մանրամաս կհարցնենք և հետո կկազմակերպենք ձեր խորհրդատվության ժամերը։",
          labels: { fullName: "Անուն ազգանուն", email: "Էլ․ հասցե", phone: "Հեռախոս (ըստ ցանկության)", service: "Ծառայության տեսակ", message: "Նախագծի մանրամասներ" },
          placeholders: {
            fullName: "Ձեր անունը",
            email: "ձեր.էլփոստ@example.com",
            phone: "+1 (___) ___-____",
            message: "Ասեք՝ ինչ եք պլանավորում, մոտավոր չափը և ձեր իդեալական ժամկետը։",
            service: "Ընտրեք մեկը",
          },
          options: { Construction: "Կառուցում", Renovation: "Վերանորոգում", Design: "Դիզայն" },
          submit: "Ուղարկել հայտ",
          callInstead: "Զանգել փոխարեն",
          required: "Պարտադիր",
          errors: {
            name: "Խնդրում ենք մուտքագրել ձեր անունը։",
            email: "Մուտքագրեք ճիշտ էլ․ հասցե։",
            phone: "Մուտքագրեք ճիշտ հեռախոսահամար (կամ թողեք դատարկ)։",
            service: "Ընտրեք ծառայության տեսակ։",
            message: "Մի քիչ ավել պատմեք (առնվազն 12 նիշ)։",
          },
          success: "Հայտը ստացվեց։ Շուտով կկապվենք՝ խորհրդատվության ժամերը կազմակերպելու համար։",
          successAlt: "Ուզո՞ւմ եք էլ․ փոստով։",
          successSend: "Ուղարկել մանրամասները",
        },
      },
    },
    ru: {
      nav: { "index.html": "Главная", "about.html": "О нас", "services.html": "Услуги", "portfolio.html": "Портфолио", "testimonials.html": "Отзывы", "contact.html": "Контакты" },
      ctas: {
        callNow: "Позвонить сейчас",
        requestConsultation: "Запросить консультацию",
        getQuote: "Получить расчет",
        viewPortfolio: "Посмотреть портфолио",
        seeServices: "Посмотреть услуги",
        exploreServices: "Посмотреть услуги",
        readTestimonials: "Читать отзывы",
      },
      pages: {
        home: {
          eyebrow: "Лицензированные • Страхованные • Построено для долгой службы",
          h1: "Monolith Building: Построено надолго. Сделано, чтобы впечатлять.",
          lead: "Премиальное строительство домов, ремонт квартир и коммерческие проекты—с вниманием к деталям, понятной коммуникацией и надежными сроками.",
          whyTitle: "Почему клиенты Monolith выбирают нас",
          whyLead: "Вам нужен подрядчик, который уважает ваш дом, бюджет и график. Мы сочетаем премиальное мастерство со спокойным, организованным процессом.",
          quickTitle: "Услуги, которые ощущаются премиально",
          quickLead: "От новостроек до обновления квартир и коммерческих улучшений—мы сохраняем одинаковые стандарты качества.",
          portfolioTitle: "Основные проекты портфолио",
          portfolioLead: "Короткий обзор последних строек, ремонтов и дизайнерских преобразований.",
          testimonialsTitle: "Отзывы клиентов",
          testimonialsLead: "Что говорят владельцы домов, арендаторы и бизнесы о подходе Monolith.",
          ctaTitle: "Готовы к премиальному опыту строительства?",
          ctaLead: "Получите быструю консультацию без давления. Мы поможем определить объем работ, сроки и следующие шаги.",
          whyCards: [
            { kicker: "Качество процесса", h3: "Дисциплина от плана до сдачи", p: "Каждый этап планируется, фиксируется и выполняется точно—чтобы итоговый результат ощущался легко и уверенно." },
            { kicker: "Премиальная коммуникация", h3: "Еженедельный прогресс и четкие решения", p: "Мы информируем вас без лишнего стресса—чтобы вы всегда понимали, что будет дальше." },
            { kicker: "Уважение и чистота", h3: "Чистые объекты и аккуратное мастерство", p: "Мы бережем ваше имущество: защищаем отделку, контролируем мусор и аккуратно сдаем объект." },
          ],
          quickCards: [
            { kicker: "Строительство", h3: "Дома для долгих лет", p: "Каркас, отделка и высокоточное исполнение с премиальными материалами." },
            { kicker: "Ремонт", h3: "Ремонты квартир, которые держатся", p: "Кухня, санузел, изменения планировки и современные отделки—под ключ." },
            { kicker: "Дизайн", h3: "Премиальное направление по дизайну", p: "Подбор материалов, планировка пространства и стилистика, которая поднимает уровень повседневности." },
          ],
        },
        about: {
          eyebrow: "Премиальное мастерство и дисциплинированный процесс",
          h1: "Надежный подрядчик — от начала до сдачи.",
          lead: "Monolith Building создан, чтобы строительство было понятным, премиальным и уважительным. От согласования и планирования материалов до управления объектом и финального обхода — мы работаем через организацию и стандарты качества отделки.",
          processTitle: "Наш процесс — проще",
          processLead: "Вы всегда будете знать следующий шаг. Мы планируем работы, ответственно составляем график и держим вас в курсе практичными обновлениями.",
          valuesTitle: "Ценности, которые видно в работе",
          valuesLead: "Наши стандарты одинаковы для всех типов проектов—домов, квартир и коммерческих объектов.",
          aboutCtaTitle: "Давайте построим то, что ощущается премиально.",
          aboutCtaLead: "Расскажите о целях, а мы предложим лучший путь—строительство, ремонт или поддержку по дизайну.",
          processCards: [
            { kicker: "Шаг 01", h3: "Консультация + согласование", p: "Определяем цели, выявляем ограничения и предлагаем реалистичный план проекта." },
            { kicker: "Шаг 02", h3: "План + график", p: "Координируем материалы, этапы и логистику на объекте, чтобы работы шли чисто и по плану." },
            { kicker: "Шаг 03", h3: "Строим + сдаём", p: "Исполнение с упором на качество, обновления по прогрессу и финальный обход, которому можно доверять." },
          ],
          premiumCards: [
            { h3: "Что делает это «премиальным»?", p: "Премиум — это не только отделка, это опыт. Мы бережем имущество, проверяем детали и держим решения в порядке, чтобы результат выглядел продуманно и был крепким." },
            { h3: "Уважение к вашему пространству", p: "Чистые рабочие привычки, аккуратная подготовка и контроль пыли помогают вашему дню идти максимально спокойно во время ремонта или строительства." },
          ],
          valuesCards: [
            { kicker: "Качество в основе", h3: "Детали, которые держатся", p: "Мы строим на долговечность, точность и качество отделки—не просто «достаточно хорошо»." },
            { kicker: "Сроки", h3: "Дисциплина по графику", p: "Контроль этапов, ответственное планирование и меньше сюрпризов по ходу проекта." },
            { kicker: "Ясность", h3: "Прозрачные решения", p: "Мы ясно объясняем варианты, чтобы вы выбирали уверенно и двигались дальше спокойно." },
          ],
        },
        services: {
          eyebrow: "Три способа улучшить пространство",
          h1: "Строительство, ремонт и премиальный дизайн.",
          lead: "Выбирайте результат. Мы возьмем на себя объем работ, график и качество отделки на уровне стандарта Monolith—чтобы с первого дня все выглядело продуманно.",
          servicesTitle: "Выберите результат проекта",
          servicesLead: "Строите новое или обновляете то, что вам нравится—мы обеспечим премиальное исполнение и спокойный, организованный процесс.",
          cardsTop: [
            { kicker: "Строительство", h3: "Премиальные дома", p: "Новостройки с дисциплинированным исполнением, долговечной отделкой и премиальной сдачей под ключ." },
            { kicker: "Ремонт", h3: "Ремонты квартир", p: "Кухни, санузлы, обновление планировки и современные отделки—аккуратно и с чистыми стандартами на объекте." },
            { kicker: "Дизайн", h3: "Направление по материалам и планировке", p: "Помощь, которая повышает уровень пространства: палитра, отделка и планировка с премиальным ощущением." },
          ],
          scopeTitle: "Что входит (чтобы не гадать)",
          scopeLead: "Мы фокусируемся на деталях, которые защищают сроки и предотвращают дорогие сюрпризы.",
          includedCards: [
            { h3: "Четкий объем и результаты", p: "Мы определяем, что входит, что опционально и какие решения будете принимать вы." },
            { h3: "Планирование отделки премиум", p: "Материалы и направление по отделке планируются для стабильного, качественного результата." },
            { h3: "Чистые стандарты на объекте", p: "Контролируем пыль, защищаем поверхности и поддерживаем порядок на рабочем месте." },
          ],
          bestCards: [
            { h3: "Лучше всего подходит для", p: "Для владельцев, которым важна премиальная отделка, для арендаторов, которые делают ремонт для комфорта и современного стиля, и для бизнеса, которому нужны профессиональные улучшения с минимальными нарушениями." },
            { h3: "Мы готовы, когда готовы вы", p: "Если планируете в ближайшие месяцы, мы поможем определить объем работ и сроки, чтобы стартовать уверенно." },
          ],
        },
        portfolio: {
          eyebrow: "Доказательство премиального исполнения",
          h1: "Проекты портфолио — для реальной жизни.",
          lead: "Отфильтруйте по категории, а затем откройте карточку проекта и посмотрите ключевые моменты по объему работ.",
          title: "Каталог проектов",
          lead: "Хотите что-то подобное? Запросите консультацию, и мы распланируем объем и сроки.",
          filters: { all: "Все", construction: "Строительство", renovation: "Ремонт", design: "Дизайн" },
          viewDetails: "Посмотреть детали",
          projects: [
            { tag: "Строительство", type: "Дом для семьи", h3: "Современное фасадное строительство", p: "Долговечные материалы, четкие линии и премиальная отделка через финальный обход." },
            { tag: "Ремонт", type: "Квартира", h3: "Обновление света и пространства", p: "Обновление кухни, улучшение напольных покрытий и современная координация отделки—аккуратно и по плану." },
            { tag: "Дизайн", type: "Обновление интерьера", h3: "Премиальное направление по материалам", p: "Теплые палитры и сбалансированные контрасты—чтобы каждая комната выглядела цельно." },
            { tag: "Строительство", type: "Коммерческий объект", h3: "Строительство входной группы", p: "Долговечные улучшения входа с минимальными неудобствами и премиальной отделкой." },
            { tag: "Ремонт", type: "Ванная и отделка", h3: "Модернизация ванной", p: "Обновление душа, координация плитки и премиальные детали для ежедневного комфорта." },
            { tag: "Дизайн", type: "Коммерческий интерьер", h3: "Современный стиль офиса", p: "Координация дизайна для премиального пространства: чистая палитра, долговечные материалы и цельная логика." },
          ],
          modalScopeTitle: "Ключевые элементы объема",
          modal: { category: "Категория", location: "Локация", timeline: "Сроки", fallbackTitle: "Детали проекта" },
          ctaTitle: "Хотите проект как этот?",
          ctaLead: "Расскажите о целях и сроках. Мы предложим лучший следующий шаг—строительство, ремонт или поддержку по дизайну.",
        },
        testimonials: {
          eyebrow: "Нас рекомендуют клиенты",
          h1: "Отзывы клиентов — основаны на реальном опыте.",
          lead: "Строительство — личное. Вот что чаще всего замечают: чистое исполнение, понятная коммуникация и результат с премиальным ощущением.",
          title: "Что запоминают клиенты",
          lead: "Стабильность в домах, ремонтах и коммерческих проектах.",
          cards: [
            { h3: "Понятные обновления и спокойные решения", p: "Мы делаем переход к следующему шагу простым благодаря практичному прогрессу и объясненным вариантам." },
            { h3: "Дисциплина на объекте", p: "Чистые рабочие привычки защищают ваш дом и помогают эффективно двигаться по графику." },
            { h3: "Премиальный результат", p: "Долговечные материалы, ровные отделки и мастерство, которое ощущается каждый день." },
          ],
          ctaTitle: "Хотите почувствовать разницу?",
          ctaLead: "Запросите консультацию, и мы предложим лучший подход для вашего дома, квартиры или коммерческого проекта.",
          testimonialTexts: [
            "Самый чистый строительный опыт, который у нас был. Команда аккуратно работала с каждой отделкой, а коммуникация всегда была ясной.",
            "Квартира выглядит как новая. Улучшения планировки и выбор материалов ощущаются тщательно продуманными.",
            "Профессионально, организованно и быстро. Они держали объект в идеальной чистоте и вели решения без давления.",
            "Отделка получилась ровно такой, как мы хотели. Финальный результат выглядит дорого и надежно.",
            "Они быстро отвечали, хорошо держали расписание и бережно относились к нашему ежедневному ритму.",
          ],
          testimonialAuthors: ["Сара М. — Владелец дома", "Джордан Т. — Арендатор", "Алекс Р. — Собственник бизнеса", "Эмили К. — Владелец дома", "Морган С. — Арендатор"],
        },
        contact: {
          eyebrow: "Быстрый ответ. Премиальная коммуникация.",
          h1: "Запросите консультацию Monolith Building.",
          lead: "Расскажите, что вы строите или ремонтируете. Мы поможем определить объем работ, сроки и следующий шаг—без давления.",
          sectionTitle: "Контакты и быстрая заявка",
          sectionLead: "Предпочитаете поговорить? Используйте кнопку звонка. Либо заполните форму — мы свяжемся в ближайшее время.",
          directTitle: "Прямые линии",
          directSub: "Monolith Building работает с жилыми и коммерческими проектами.",
          formTitle: "Быстрая заявка",
          formSub: "Мы уточним несколько деталей и свяжемся, чтобы назначить консультацию.",
          labels: { fullName: "Имя и фамилия", email: "Эл. почта", phone: "Телефон (необязательно)", service: "Тип услуги", message: "Детали проекта" },
          placeholders: {
            fullName: "Ваше имя",
            email: "you@example.com",
            phone: "+1 (___) ___-____",
            message: "Расскажите, что вы планируете, примерный размер и ваш идеальный срок.",
            service: "Выберите вариант",
          },
          options: { Construction: "Строительство", Renovation: "Ремонт", Design: "Дизайн" },
          submit: "Отправить заявку",
          callInstead: "Позвонить вместо этого",
          required: "Обязательно",
          errors: {
            name: "Пожалуйста, укажите ваше имя.",
            email: "Введите корректный адрес эл. почты.",
            phone: "Введите корректный номер телефона (или оставьте пустым).",
            service: "Выберите тип услуги.",
            message: "Расскажите чуть больше (минимум 12 символов).",
          },
          success: "Заявка получена. Мы свяжемся в ближайшее время, чтобы согласовать консультацию.",
          successAlt: "Предпочитаете по email?",
          successSend: "Отправить детали",
        },
      },
    },
  };

  const t = (path, fallback="") => {
    const parts = String(path).split(".");
    let cur = I18N[currentLang];
    for(const p of parts){
      if(!cur || typeof cur !== "object" || !(p in cur)) { cur = I18N.en; continue; }
      cur = cur[p];
    }
    return (cur && typeof cur === "string") ? cur : fallback;
  };

  const escapeText = (s)=> String(s ?? "");

  const setBtnTextBySelector = (sel, text)=>{
    const el = $(sel);
    if(el) el.textContent = text;
  };

  const setText = (el, text)=>{
    if(el) el.textContent = escapeText(text);
  };

  const setKickerTextPreserveIcon = (card, text)=>{
    const kicker = card && card.querySelector(".kicker");
    if(!kicker) return;
    const icon = kicker.querySelector(".icon");
    if(icon){
      const iconHtml = icon.outerHTML;
      kicker.innerHTML = iconHtml + " " + escapeText(text);
    } else {
      kicker.textContent = escapeText(text);
    }
  };

  const setEyebrow = (eyebrowEl, text)=>{
    if(!eyebrowEl) return;
    const dot = eyebrowEl.querySelector(".eyebrow-dot");
    if(dot){
      const dotHtml = dot.outerHTML;
      eyebrowEl.innerHTML = dotHtml;
      eyebrowEl.appendChild(document.createTextNode(" " + text));
    } else {
      eyebrowEl.textContent = escapeText(text);
    }
  };

  const updateLangButtons = ()=>{
    $$(".lang-btn").forEach(btn=>{
      btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });
  };

  const applyNavAndCommon = ()=>{
    // Nav links
    const navMap = I18N[currentLang].nav || I18N.en.nav;
    $$('a[data-nav-link]').forEach(a=>{
      const href = (a.getAttribute("href") || "");
      const key = href.split("#")[0];
      if(navMap[key]) a.textContent = navMap[key];
    });

    // Header call button
    const callNowText = I18N[currentLang].ctas.callNow;
    const headerCall = $(".site-header .header-cta a.btn-ghost[href^='tel:+14155550123']");
    if(headerCall) headerCall.textContent = "☎ " + callNowText;

    const drawerCall = $(".mobile-drawer .drawer-cta a.btn-ghost[href^='tel:+14155550123']");
    if(drawerCall) drawerCall.textContent = "☎ " + callNowText;

    // Quote / consultation CTA
    const rq = I18N[currentLang].ctas.requestConsultation;
    $$("a.btn-primary[href='contact.html#contact-form'], a.btn-primary[href='#contact-form']").forEach(a=>{
      a.textContent = rq;
    });

    // Portfolio CTAs
    const vp = I18N[currentLang].ctas.viewPortfolio;
    $$("a.btn-ghost[href='portfolio.html#portfolio'], a.btn-ghost[href='#portfolio']").forEach(a=>{
      a.textContent = vp;
    });

    // Common secondary CTAs
    const seeServices = I18N[currentLang].ctas.seeServices;
    const exploreServices = I18N[currentLang].ctas.exploreServices;
    $$("a[href='services.html']").forEach(a=>{
      if(a.matches("a[data-nav-link]")) return;
      // Keep it simple: choose "Explore" when the original text indicates it.
      a.textContent = (a.textContent.toLowerCase().includes("explor")) ? exploreServices : seeServices;
    });

    const readTestimonials = I18N[currentLang].ctas.readTestimonials;
    $$("a[href='testimonials.html#testimonials']").forEach(a=>{
      a.textContent = readTestimonials;
    });

    // Footer quick translations (call/email + page links)
    const footerTel = $$("footer a[href='tel:+14155550123']");
    const footerMail = $$("footer a[href='mailto:hello@monolithbuilding.com']");
    const telPrefix = { en: "Call:", hy: "Զանգ:", ru: "Звонок:" }[currentLang] || "Call:";
    const mailPrefix = { en: "Email:", hy: "Էլ․ փոստ:", ru: "Email:" }[currentLang] || "Email:";
    footerTel.forEach(a=> a.textContent = `${telPrefix} +1 (415) 555-0123`);
    footerMail.forEach(a=> a.textContent = `${mailPrefix} hello@monolithbuilding.com`);

    // Footer page links (only plain *.html links; don't override map anchors)
    const footerNavMap = I18N[currentLang].nav || I18N.en.nav;
    $$("footer a").forEach(a=>{
      const href = (a.getAttribute("href") || "");
      if(href.includes("#")) return;
      if(footerNavMap[href]) a.textContent = footerNavMap[href];
    });
  };

  const applyHome = ()=>{
    const home = I18N[currentLang].pages.home;
    if(!home) return;
    setEyebrow(document.querySelector("main .hero .eyebrow"), home.eyebrow);
    setText(document.querySelector("main .hero h1"), home.h1);
    const lead = document.querySelector("main .hero-grid > div > p.reveal-up");
    setText(lead, home.lead);

    // Section headings + leads
    setText(document.getElementById("why-monolith"), home.whyTitle);
    const whyLead = document.querySelector('section[aria-labelledby="why-monolith"] p.lead');
    setText(whyLead, home.whyLead);

    setText(document.getElementById("quick-services"), home.quickTitle);
    const quickLead = document.querySelector('section[aria-labelledby="quick-services"] p.lead');
    setText(quickLead, home.quickLead);

    setText(document.getElementById("portfolio-preview"), home.portfolioTitle);
    const portLead = document.querySelector('section[aria-labelledby="portfolio-preview"] p.lead');
    setText(portLead, home.portfolioLead);

    setText(document.getElementById("testimonials-preview"), home.testimonialsTitle);
    const tstLead = document.querySelector('section[aria-labelledby="testimonials-preview"] p.lead');
    setText(tstLead, home.testimonialsLead);

    setText(document.getElementById("cta-final"), home.ctaTitle);
    const ctaLead = document.querySelector('section[aria-labelledby="cta-final"] p.lead');
    setText(ctaLead, home.ctaLead);

    // Cards: why
    const whySection = document.querySelector('section[aria-labelledby="why-monolith"]');
    const whyCards = whySection ? whySection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(whyCards && whyCards.length >= 3){
      home.whyCards.forEach((c, i)=>{
        const card = whyCards[i];
        if(!card) return;
        setKickerTextPreserveIcon(card, c.kicker);
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p"), c.p);
      });
    }

    // Cards: quick services
    const quickSection = document.querySelector('section[aria-labelledby="quick-services"]');
    const quickCards = quickSection ? quickSection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(quickCards && quickCards.length >= 3){
      home.quickCards.forEach((c, i)=>{
        const card = quickCards[i];
        if(!card) return;
        setKickerTextPreserveIcon(card, c.kicker);
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p"), c.p);
      });
    }

    // Common CTAs inside home sections (optional)
    const rq = I18N[currentLang].ctas.requestConsultation;
    $$("a.btn-primary[href^='contact.html#contact-form'], a.btn-primary[href='#contact-form']").forEach(a=>{
      a.textContent = rq;
    });
  };

  const applyAbout = ()=>{
    const page = I18N[currentLang].pages.about;
    if(!page) return;
    setEyebrow(document.querySelector("main .hero .eyebrow"), page.eyebrow);
    setText(document.querySelector("main .hero h1"), page.h1);
    setText(document.querySelector("main .hero-grid > div > p.reveal-up"), page.lead);

    setText(document.getElementById("process"), page.processTitle);
    setText(document.querySelector('section[aria-labelledby="process"] p.lead'), page.processLead);

    setText(document.getElementById("values"), page.valuesTitle);
    setText(document.querySelector('section[aria-labelledby="values"] p.lead'), page.valuesLead);

    setText(document.getElementById("about-cta"), page.aboutCtaTitle);
    setText(document.querySelector('section[aria-labelledby="about-cta"] p.lead'), page.aboutCtaLead);

    // Process cards (Step 01/02/03)
    const procSection = document.querySelector('section[aria-labelledby="process"]');
    const procCards = procSection ? procSection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(procCards && procCards.length >= 3){
      page.processCards.forEach((c, i)=>{
        const card = procCards[i];
        if(!card) return;
        setKickerTextPreserveIcon(card, c.kicker);
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p"), c.p);
      });
    }

    // Premium cards (grid-2) inside process section
    const grid2 = procSection ? procSection.querySelector(".grid-2") : null;
    const premiumCards = grid2 ? grid2.querySelectorAll("article.card") : [];
    if(premiumCards && premiumCards.length >= 2){
      page.premiumCards.forEach((c, i)=>{
        const card = premiumCards[i];
        if(!card) return;
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p.muted"), c.p);
      });
    }

    // Values cards
    const valuesSection = document.querySelector('section[aria-labelledby="values"]');
    const valueCards = valuesSection ? valuesSection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(valueCards && valueCards.length >= 3){
      page.valuesCards.forEach((c, i)=>{
        const card = valueCards[i];
        if(!card) return;
        setKickerTextPreserveIcon(card, c.kicker);
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p"), c.p);
      });
    }
  };

  const applyServices = ()=>{
    const page = I18N[currentLang].pages.services;
    if(!page) return;
    setEyebrow(document.querySelector("main .hero .eyebrow"), page.eyebrow);
    setText(document.querySelector("main .hero h1"), page.h1);
    setText(document.querySelector("main .hero-grid > div > p.reveal-up"), page.lead);

    setText(document.getElementById("services-title"), page.servicesTitle);
    setText(document.querySelector('section[aria-labelledby="services"] p.lead'), page.servicesLead);

    // Top service cards
    const topCardsSection = document.querySelector('section[aria-labelledby="services"]');
    const topCards = topCardsSection ? topCardsSection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(topCards && topCards.length >= 3){
      page.cardsTop.forEach((c, i)=>{
        const card = topCards[i];
        if(!card) return;
        setKickerTextPreserveIcon(card, c.kicker);
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p"), c.p);
      });
    }

    setText(document.getElementById("scope-details"), page.scopeTitle);
    setText(document.querySelector('section[aria-labelledby="scope-details"] p.lead'), page.scopeLead);

    // Included cards grid-3
    const scopeSection = document.querySelector('section[aria-labelledby="scope-details"]');
    const includedCards = scopeSection ? scopeSection.querySelectorAll(".grid-3 article.card-feature") : [];
    if(includedCards && includedCards.length >= 3){
      page.includedCards.forEach((c, i)=>{
        const card = includedCards[i];
        if(!card) return;
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p.muted"), c.p);
      });
    }

    // Best cards grid-2
    const grid2 = scopeSection ? scopeSection.querySelector(".grid-2") : null;
    const bestCards = grid2 ? grid2.querySelectorAll("article.card") : [];
    if(bestCards && bestCards.length >= 2){
      page.bestCards.forEach((c, i)=>{
        const card = bestCards[i];
        if(!card) return;
        setText(card.querySelector("h3"), c.h3);
        setText(card.querySelector("p.muted"), c.p);
      });
    }
  };

  const applyPortfolio = ()=>{
    const page = I18N[currentLang].pages.portfolio;
    if(!page) return;

    setEyebrow(document.querySelector("main .hero .eyebrow"), page.eyebrow);
    setText(document.querySelector("main .hero h1"), page.h1);
    setText(document.querySelector("main .hero-grid > div > p.reveal-up"), page.lead);

    setText(document.getElementById("portfolio-title"), page.title);
    setText(document.querySelector('section[aria-labelledby="portfolio"] p.lead'), page.lead);

    // Filters
    const filterButtons = $$(".filters .chip");
    filterButtons.forEach(btn=>{
      const k = btn.dataset.filter;
      if(page.filters && page.filters[k]) btn.textContent = page.filters[k];
    });

    // Projects
    const projects = $$(".portfolio-grid article.project");
    if(projects && projects.length){
      page.projects.forEach((p, i)=>{
        const card = projects[i];
        if(!card) return;
        const metaTag = card.querySelector(".project-meta .tag");
        if(metaTag) metaTag.textContent = p.tag;
        const metaType = card.querySelectorAll(".project-meta span");
        if(metaType && metaType.length >= 2) metaType[1].textContent = p.type;
        setText(card.querySelector("h3"), p.h3);
        setText(card.querySelector("p"), p.p);
        const viewBtn = card.querySelector(".btn-view");
        if(viewBtn){
          viewBtn.textContent = page.viewDetails;
          viewBtn.dataset.title = p.h3;
          viewBtn.dataset.category = p.tag;
          viewBtn.dataset.desc = p.p;
        }
      });
    }

    // Modal title
    setText(document.getElementById("modal-scope-title"), page.modalScopeTitle);

    // CTA section at end
    setText(document.querySelector('section[aria-labelledby="portfolio-cta"] h2'), page.ctaTitle);
    setText(document.querySelector('section[aria-labelledby="portfolio-cta"] p.lead'), page.ctaLead);
  };

  const applyTestimonials = ()=>{
    const page = I18N[currentLang].pages.testimonials;
    if(!page) return;

    setEyebrow(document.querySelector("main .hero .eyebrow"), page.eyebrow);
    setText(document.querySelector("main .hero h1"), page.h1);
    setText(document.querySelector("main .hero-grid > div > p.reveal-up"), page.lead);

    setText(document.querySelector('section[aria-labelledby="testimonials"] h2'), page.title);
    setText(document.querySelector('section[aria-labelledby="testimonials"] p.lead'), page.lead);

    // Testimonial carousel content
    const tEls = $$("#testimonials .testimonial");
    tEls.forEach((el, i)=>{
      const p = el.querySelector("p");
      const f = el.querySelector("footer");
      if(p && page.testimonialTexts[i]) p.textContent = page.testimonialTexts[i];
      if(f && page.testimonialAuthors[i]) f.textContent = page.testimonialAuthors[i];
    });

    // Cards under carousel
    const cards = $$("#testimonials .grid-3 article.card-feature");
    page.cards.forEach((c, i)=>{
      const card = cards[i];
      if(!card) return;
      setText(card.querySelector("h3"), c.h3);
      setText(card.querySelector("p"), c.p);
    });

    // CTA section
    setText(document.getElementById("testimonials-cta"), page.ctaTitle);
    setText(document.querySelector('section[aria-labelledby="testimonials-cta"] p.lead'), page.ctaLead);
  };

  const applyContact = ()=>{
    const page = I18N[currentLang].pages.contact;
    if(!page) return;

    setEyebrow(document.querySelector("main .hero .eyebrow"), page.eyebrow);
    setText(document.querySelector("main .hero h1"), page.h1);
    setText(document.querySelector("main .hero-grid > div > p.reveal-up"), page.lead);

    setText(document.getElementById("contact-section"), page.sectionTitle);
    setText(document.querySelector('section[aria-labelledby="contact-section"] p.lead'), page.sectionLead);

    // Direct lines card
    setText(document.getElementById("direct-lines-title"), page.directTitle);
    setText(document.getElementById("direct-lines-sub"), page.directSub);

    // Form title/sub
    setText(document.getElementById("quick-quote-title"), page.formTitle);
    setText(document.getElementById("quick-quote-sub"), page.formSub);

    // Form labels
    setText(document.getElementById("label-fullName"), page.labels.fullName);
    setText(document.getElementById("label-email"), page.labels.email);
    setText(document.getElementById("label-phone"), page.labels.phone);
    setText(document.getElementById("label-service"), page.labels.service);
    setText(document.getElementById("label-message"), page.labels.message);

    // Placeholders
    const fullName = $("#fullName");
    const email = $("#email");
    const phone = $("#phone");
    const message = $("#message");
    const service = $("#service");
    if(fullName) fullName.placeholder = page.placeholders.fullName;
    if(email) email.placeholder = page.placeholders.email;
    if(phone) phone.placeholder = page.placeholders.phone;
    if(message) message.placeholder = page.placeholders.message;
    if(service){
      const def = service.querySelector('option[value=""]');
      if(def) def.textContent = page.placeholders.service;
      const optMap = page.options || {};
      Object.keys(optMap).forEach(v=>{
        const opt = service.querySelector(`option[value="${v}"]`);
        if(opt) opt.textContent = optMap[v];
      });
    }

    // Submit / call instead
    const submitBtn = $("#submit-request-btn");
    if(submitBtn) submitBtn.textContent = page.submit + " →";
    const callInstead = $("#call-instead-link");
    if(callInstead) callInstead.textContent = page.callInstead;

    // Required screen-reader text (first one)
    const requiredSr = $("#contact-form .sr-only");
    if(requiredSr) requiredSr.textContent = page.required;
  };

  const applyLanguage = ()=>{
    document.documentElement.lang = (LANGS[currentLang] && LANGS[currentLang].htmlLang) ? LANGS[currentLang].htmlLang : "en";
    updateLangButtons();
    applyNavAndCommon();

    // Page-specific swaps
    if(document.getElementById("why-monolith") && document.getElementById("quick-services")) applyHome();
    if(document.getElementById("process") && document.getElementById("values")) applyAbout();
    if(document.getElementById("services-hero") && document.getElementById("scope-details")) applyServices();
    if(document.getElementById("portfolio-hero") && document.getElementById("portfolio-title")) applyPortfolio();
    if(document.getElementById("testimonials-hero")) applyTestimonials();
    if(document.getElementById("contact-hero")) applyContact();
  };

  const initLanguageSwitcher = ()=>{
    const buttons = $$(".lang-btn");
    if(!buttons.length) return;
    // ensure current selection
    applyLanguage();

    buttons.forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const next = btn.dataset.lang;
        if(!next || !LANGS[next]) return;
        currentLang = next;
        try{ localStorage.setItem("mb_lang", next); }catch(_){}
        try{
          const url = new URL(window.location.href);
          url.searchParams.set("lang", next);
          window.history.replaceState(null, "", url.toString());
        }catch(_){}
        applyLanguage();
      });
    });
  };

  initLanguageSwitcher();

  // Smooth reveal on scroll (IntersectionObserver)
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting){
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  // Mobile nav drawer
  const drawer = $(".mobile-drawer");
  const menuBtn = $(".menu-btn");
  const drawerClose = $(".drawer-close");
  if(drawer && menuBtn){
    const open = ()=> drawer.classList.add("is-open");
    const close = ()=> drawer.classList.remove("is-open");

    menuBtn.addEventListener("click", open);
    if(drawerClose) drawerClose.addEventListener("click", close);
    drawer.addEventListener("click", (e)=>{
      if(e.target === drawer) close();
    });

    // Close drawer when navigating
    $$(".drawer-links a, .drawer-cta a").forEach(a=>{
      a.addEventListener("click", ()=> close());
    });
  }

  // Active nav link (based on pathname)
  const setActiveNav = ()=>{
    const path = window.location.pathname.split("/").pop() || "index.html";
    $$("a[data-nav-link]").forEach(a=>{
      const href = (a.getAttribute("href") || "").split("/").pop();
      if(href === path) a.classList.add("is-active");
    });
  };
  setActiveNav();
  window.addEventListener("popstate", setActiveNav);

  // Hash handling: scroll to form and focus first field
  const focusFirstField = (root) => {
    const first = $("input, select, textarea, button", root);
    if(first && typeof first.focus === "function") first.focus({preventScroll:true});
  };

  const handleHashScroll = ()=>{
    const hash = window.location.hash;
    if(!hash) return;
    const id = hash.replace("#","");
    const el = document.getElementById(id);
    if(el){
      setTimeout(()=>{
        el.scrollIntoView({behavior: "smooth", block: "start"});
        focusFirstField(el);
      }, 120);
    } else {
      // fallback: look for a marker element
      const marker = document.querySelector(`[data-scroll-target="${id}"]`);
      if(marker) marker.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };
  window.addEventListener("load", handleHashScroll);
  window.addEventListener("hashchange", handleHashScroll);

  // Portfolio filters + modal details
  const portfolioGrid = $(".portfolio-grid");
  const filterBar = $(".filters");
  const modal = $(".modal");
  const modalClose = $(".modal-close");
  const modalTitle = $(".modal-title");
  const modalDesc = $(".modal-desc");
  const modalSpecs = $(".modal-specs");
  const modalImage = $(".modal-image img");

  const closeModal = ()=>{
    if(modal) modal.classList.remove("is-open");
    if(modalClose) modalClose.blur();
    document.body.style.overflow = "";
  };

  const openModalFor = (btn)=>{
    if(!modal || !btn) return;
    const data = btn.dataset || {};
    const modalFallback = I18N[currentLang].pages.portfolio?.modal?.fallbackTitle || "Project detail";
    if(modalTitle) modalTitle.textContent = data.title || modalFallback;
    if(modalDesc) modalDesc.textContent = data.desc || "";
    if(modalImage && data.image) modalImage.src = data.image;
    if(modalSpecs){
      const modalI18n = I18N[currentLang].pages.portfolio?.modal || {};
      const specs = [
        { label: modalI18n.category || "Category", value: data.category || "Project" },
        { label: modalI18n.location || "Location", value: data.location || "—" },
        { label: modalI18n.timeline || "Timeline", value: data.timeline || "—" },
      ];
      modalSpecs.innerHTML = specs.map(s=>(
        `<div class="spec"><strong>${escapeHtml(s.label)}</strong><span>${escapeHtml(s.value)}</span></div>`
      )).join("");
    }
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const escapeHtml = (str)=>{
    return String(str).replace(/[&<>"']/g, (m)=>({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[m]));
  };

  if(filterBar && portfolioGrid){
    const chips = $$(".chip", filterBar);
    const cards = $$(".project", portfolioGrid);

    const apply = (category)=>{
      chips.forEach(c=>{
        c.classList.toggle("is-active", c.dataset.filter === category);
      });
      cards.forEach(card=>{
        const cat = card.dataset.category || "all";
        const show = category === "all" || cat === category;
        card.style.display = show ? "" : "none";
      });
    };

    chips.forEach(c=>{
      c.addEventListener("click", ()=>{
        apply(c.dataset.filter || "all");
      });
    });
  }

  // Modal open/close
  if(modal){
    if(modalClose){
      modalClose.addEventListener("click", closeModal);
    }
    modal.addEventListener("click", (e)=>{
      if(e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });

    $$(".project-actions .btn-view, .btn-view", document).forEach(btn=>{
      btn.addEventListener("click", (e)=>{
        e.preventDefault();
        openModalFor(btn);
      });
    });
  }

  // Testimonials carousel (minimal)
  const carousel = $(".testimonial-wrap");
  if(carousel){
    const items = $$(".testimonial", carousel);
    const prevBtn = $(".carousel-prev", carousel);
    const nextBtn = $(".carousel-next", carousel);
    let idx = 0;

    const show = (i)=>{
      if(!items.length) return;
      idx = (i + items.length) % items.length;
      items.forEach((el, n)=> el.classList.toggle("is-active", n === idx));
    };

    show(0);
    if(nextBtn) nextBtn.addEventListener("click", ()=> show(idx + 1));
    if(prevBtn) prevBtn.addEventListener("click", ()=> show(idx - 1));

    // auto-advance (pauses when user interacts)
    let timer = null;
    const start = ()=>{
      if(timer) return;
      timer = window.setInterval(()=> show(idx + 1), 6500);
    };
    const stop = ()=>{
      if(timer){ window.clearInterval(timer); timer = null; }
    };
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    start();
  }

  // Contact form validation + UX
  const form = $("#contact-form");
  if(form){
    const status = $(".form-success");
    const setError = (input, msg)=>{
      const row = input.closest("label, .field") || input.parentElement;
      let errEl = $(".field-error", row);
      if(!errEl){
        errEl = document.createElement("div");
        errEl.className = "field-error";
        row.appendChild(errEl);
      }
      errEl.textContent = msg;
    };
    const clearError = (input)=>{
      const row = input.closest("label, .field") || input.parentElement;
      const errEl = $(".field-error", row);
      if(errEl) errEl.textContent = "";
    };

    const isEmail = (v)=> /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
    const isPhoneish = (v)=>{
      const s = String(v || "").trim();
      if(!s) return true; // phone optional
      return s.replace(/[^\d]/g,"").length >= 8;
    };

    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(status) status.textContent = "";

      const fullName = $("#fullName", form);
      const email = $("#email", form);
      const phone = $("#phone", form);
      const service = $("#service", form);
      const message = $("#message", form);

      const errors = [];
      const contactI18n = I18N[currentLang]?.pages?.contact || I18N.en.pages.contact;
      const errs = contactI18n.errors || I18N.en.pages.contact.errors;

      const nameVal = fullName.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone.value.trim();
      const msgVal = message.value.trim();

      if(!nameVal) { errors.push({el: fullName, msg: errs.name}); }
      if(!emailVal || !isEmail(emailVal)){ errors.push({el: email, msg: errs.email}); }
      if(!isPhoneish(phoneVal)){ errors.push({el: phone, msg: errs.phone}); }
      if(!service.value){ errors.push({el: service, msg: errs.service}); }
      if(msgVal.length < 12){ errors.push({el: message, msg: errs.message }); }

      // Clear previous errors
      [fullName, email, phone, service, message].forEach(el=>{
        if(el) clearError(el);
      });

      if(errors.length){
        errors.forEach(er=> setError(er.el, er.msg));
        if(status) status.textContent = "";
        // Focus first error
        errors[0].el && errors[0].el.focus && errors[0].el.focus();
        return;
      }

      // No backend in this demo: simulate success and show a mailto fallback hint.
      const payload = {
        fullName,
        email,
        phone,
        service,
        message,
      };
      if(status){
        const subject = `Monolith Building - ${payload.service.value || "Consultation"} request`;
        const body = [
          `Name: ${payload.fullName.value || ""}`,
          `Email: ${payload.email.value || ""}`,
          `Phone: ${payload.phone.value || ""}`,
          `Service: ${payload.service.value || ""}`,
          "",
          `${payload.message.value || ""}`,
        ].join("\n");

        const mailto = `mailto:hello@monolithbuilding.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const success = contactI18n.success || I18N.en.pages.contact.success;
        const successAlt = contactI18n.successAlt || I18N.en.pages.contact.successAlt;
        const successSend = contactI18n.successSend || I18N.en.pages.contact.successSend;
        status.innerHTML = `${success}
          <div style="margin-top:.65rem; font-weight:900;">
            ${successAlt} <a class="link" style="padding:.35rem .6rem;" href="${mailto}">${successSend}</a>
          </div>`;
      }
      form.reset();
    });
  }
})();

