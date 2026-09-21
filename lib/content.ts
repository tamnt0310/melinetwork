/* ============================================================================
 * MELI NETWORK — TOÀN BỘ NỘI DUNG TRANG (song ngữ VI / EN)
 * ----------------------------------------------------------------------------
 * ĐÂY LÀ FILE DUY NHẤT BẠN CẦN SỬA để thay chữ trên website.
 * Mọi chỗ đánh dấu  ⚠️ MẪU  là nội dung/số liệu giả định — hãy thay bằng dữ
 * liệu thật của Meli Network trước khi chạy quảng cáo hoặc gửi cho đối tác.
 * Hai object `vi` và `en` PHẢI có cấu trúc giống hệt nhau.
 *
 * MẸO: `\u00A0` là dấu cách KHÔNG cho xuống dòng. Dùng nó giữa hai tiếng của
 * một từ ghép (ví dụ "sáng\u00A0tạo") để tiêu đề không bị ngắt giữa chừng.
 * ==========================================================================*/

export type Lang = "vi" | "en";

export const LANGS: Lang[] = ["vi", "en"];

const vi = {
  meta: {
    title: "Meli Network — Hệ sinh thái sáng tạo nội dung & thương mại số",
    description:
      "Meli Network kết nối Creator, thương hiệu và người tiêu dùng: quản lý kênh đa nền tảng (MCN), chiến dịch truyền thông và vận hành thương mại điện tử.",
  },

  nav: {
    items: [
      { href: "#about", label: "Về chúng tôi" },
      { href: "#services", label: "Dịch vụ" },
      { href: "#cases", label: "Dự án" },
      { href: "#partners", label: "Đối tác" },
      { href: "#culture", label: "Con người" },
    ],
    cta: "Liên hệ hợp tác",
    menu: "Mở menu",
    close: "Đóng menu",
  },

  hero: {
    eyebrow: "MCN · Agency Truyền thông · Thương mại số",
    // ⚠️ MẪU — headline định vị, có thể thay bằng slogan chính thức của bạn
    titleLead: "Biến nội dung sáng\u00A0tạo thành",
    titleAccent: "tăng\u00A0trưởng bền\u00A0vững",
    desc:
      "Meli Network là hệ sinh thái đồng hành cùng Creator và thương hiệu Việt — từ phát triển kênh đa nền tảng, xây dựng chiến dịch truyền thông, đến vận hành bán hàng trên các sàn thương mại điện tử.",
    ctaPrimary: "Hợp tác cùng Meli",
    ctaSecondary: "Khám phá hệ sinh thái",
    scroll: "Cuộn xuống",
  },

  // ⚠️ MẪU — TOÀN BỘ SỐ LIỆU DƯỚI ĐÂY LÀ GIẢ ĐỊNH. Thay bằng số thật.
  stats: {
    note: "Số liệu cập nhật quý gần nhất",
    // Lưới tự giãn theo số ô (1-4), xem components/Stats.tsx.
    items: [
      { value: "100", suffix: "+", label: "Kênh & Creator đồng hành" },
      { value: "500", suffix: " triệu", label: "Lượt xem mỗi tháng" },
      { value: "150", suffix: "+", label: "Chiến dịch thương hiệu đã triển khai" },
    ],
  },

  about: {
    eyebrow: "Hệ sinh thái kết nối Creator, Media & Commerce",
    title: "Từ nội\u00A0dung tốt đến giá\u00A0trị thực",
    lead:
      "Tại Meli Network, chúng tôi tin rằng một nội dung tốt không chỉ dừng lại ở lượt xem. Giá trị của nội dung được tạo ra khi phía sau nó có một hệ thống đủ năng lực để nuôi dưỡng con người, phát triển nội dung, kết nối thương hiệu và tạo ra kết quả thực tế.",
    body: [
      "Khởi đầu từ đội ngũ vận hành các kênh truyền thông, Meli Network từng bước phát triển thành một hệ sinh thái kết nối Creator – Media – Commerce, nơi các nguồn lực được liên kết xuyên suốt để cùng tạo ra giá trị.",
      "Từ việc phát triển và đồng hành cùng Creator, xây dựng nội dung có sức ảnh hưởng, triển khai các hoạt động Media & Marketing, đến đưa nội dung trực tiếp đến điểm chuyển đổi thương mại — Meli kết nối các mắt xích trong cùng một hệ thống.",
    ],
    // Câu chốt, hiển thị nổi bật với vạch đỏ bên trái
    closing: ["Chúng tôi không chỉ tạo ra nội dung.", "Chúng tôi xây dựng hệ thống để nội dung tạo ra giá trị."],
    pillars: [
      { title: "Minh bạch", desc: "Rõ ràng trong hợp tác, doanh thu và quyền lợi. Đảm bảo các thông tin và giá trị đối với đối tác." },
      { title: "Bền vững", desc: "Ưu tiên giá trị dài hạn, xây dựng mối quan hệ hợp tác ổn định và cùng phát triển thay vì chỉ tập trung vào kết quả ngắn hạn." },
      { title: "Hiệu quả", desc: "Mọi hoạt động được tối ưu dựa trên dữ liệu và hiệu suất thực tế, từ đó đưa ra quyết định chính xác và tạo ra kết quả đo lường được." },
    ],
  },

  services: {
    eyebrow: "Năng lực cốt lõi",
    title: "Ba năng\u00A0lực cốt\u00A0lõi – Một hệ sinh\u00A0thái toàn\u00A0diện",
    desc: [
      "Từ sáng tạo nội dung đến thương mại số, Meli Network kết nối ba năng lực cốt lõi trong một hệ sinh thái thống nhất: Creator – Media & Marketing – Commerce.",
      "Thay vì vận hành từng hoạt động riêng lẻ, Meli đóng vai trò là “đầu mối kết nối xuyên suốt”, giúp Creator và Thương hiệu tiếp cận đúng nguồn lực, đơn giản hóa quá trình triển khai và nâng cao hiệu quả vận hành.",
      "Mỗi nội dung được tạo ra không chỉ để thu hút sự chú ý, mà hướng đến một giá trị lớn hơn: xây dựng thương hiệu, tạo kết nối và chuyển hóa thành kết quả thực tế.",
    ],
    items: [
      {
        tag: "01",
        name: "Meli Creator Network",
        kicker: "MCN · Mạng lưới Creator đa nền tảng",
        desc: "Đồng hành cùng Creator trên TikTok, YouTube và Facebook — từ phát triển kênh, tối ưu nội dung đến doanh thu và bản quyền.",
        points: [
          "Phát triển & tối ưu kênh đa nền tảng",
          "Quản lý & bảo vệ bản quyền nội dung",
          "Đối soát & thanh toán doanh thu minh bạch",
          "Đào tạo & hỗ trợ vận hành cho Creator",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Agency · Truyền thông & Marketing",
        desc: "Đồng hành cùng thương hiệu từ chiến lược, sáng tạo đến triển khai và đo lường, kết nối nội dung với đúng khách hàng mục tiêu.",
        points: [
          "Chiến lược truyền thông & định vị thương hiệu",
          "KOL/KOC Marketing theo ngành hàng",
          "Sản xuất TVC, Video, Photo & Social Content",
          "Quảng cáo đa nền tảng & đo lường hiệu suất",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Affiliate · Social Commerce",
        desc: "Đồng hành cùng thương hiệu từ vận hành gian hàng, Livestream đến Affiliate, kết nối nội dung với chuyển đổi và tối ưu hiệu quả kinh doanh.",
        points: [
          "Vận hành gian hàng TikTok Shop & Shopee",
          "Livestream bán hàng & kịch bản chuyển đổi",
          "Xây dựng & vận hành mạng lưới Affiliate",
          "Tư vấn ngành hàng, giá bán & chính sách hoa hồng",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Dự án tiêu biểu",
    title: "Những con\u00A0số trên hành\u00A0trình phát\u00A0triển",
    desc: "Những con số dưới đây phản ánh một phần quy mô hoạt động và những kết quả Meli đã ghi nhận trong quá trình đồng hành cùng Creator và Thương hiệu.",
    items: [
      {
        title: "Biến sức mạnh Creator và Content thành giá trị thương mại thực",
        desc: "Từ phát triển nội dung đến chuyển đổi, Meli xây dựng chuỗi giá trị có thể đo lường.",
      },
      {
        title: "300K+ Followers — Hàng triệu lượt yêu thích",
        desc: "Nội dung chân thật, nhất quán giúp Creator xây được kết nối lâu dài và giữ sức hút với cộng đồng của mình.",
      },
      {
        title: "Xây dựng hệ sinh thái nội dung đa chủ đề",
        desc: "Biến câu chuyện đời sống thành những series nội dung có sức hút và cộng đồng.",
      },
      {
        title: "Biến sức ảnh hưởng của Creator thành giá trị cho thương hiệu",
        desc: "Đưa sản phẩm vào nội dung một cách tự nhiên, từ trải nghiệm thực tế đến kết nối thương hiệu.",
      },
    ],
  },

  partners: {
    eyebrow: "Niềm tin từ đối tác",
    title: "Đồng\u00A0hành cùng Thương\u00A0hiệu & Nền\u00A0tảng",
    desc: "Meli Network là đối tác của các nền tảng lớn và đồng hành cùng nhiều thương hiệu trong các hoạt động Creator, Marketing và Commerce.",
    logos: [
      { name: "Converse", src: "/logos/converse.png" },
      { name: "Puma", src: "/logos/puma.png" },
      { name: "Kappa", src: "/logos/kappa.png" },
      { name: "adidas", src: "/logos/adidas.png" },
      { name: "LocknLock", src: "/logos/locknlock.png" },
      { name: "Biti's", src: "/logos/bitis.png" },
      { name: "Sunhouse", src: "/logos/sunhouse.png" },
      { name: "Crocs", src: "/logos/crocs.png" },
    ],
    quotesTitle: "Chia sẻ từ đối tác và Creator",
    // ⚠️ Ba trích dẫn dưới đây chưa có tên người nói. Điền `name` và `role` khi đã
    // xin phép — để trống thì thẻ vẫn hiển thị đẹp, chỉ là không có người đứng tên.
    testimonials: [
      {
        quote:
          "Meli hỗ trợ rất sát từ việc phát triển nội dung, vận hành kênh đến các cơ hội hợp tác. Mình cảm thấy có một team thực sự đồng hành phía sau.",
        name: "",
        role: "",
      },
      {
        quote:
          "Điều mình đánh giá cao ở Meli là cách làm việc rõ ràng và chuyên nghiệp. Các vấn đề về doanh thu, hợp tác hay bản quyền đều được team hỗ trợ khá nhanh.",
        name: "",
        role: "",
      },
      {
        quote:
          "Meli hiểu khá rõ cách kết nối thương hiệu với Creator phù hợp. Team chủ động, linh hoạt và bám sát mục tiêu của chiến dịch.",
        name: "",
        role: "",
      },
    ],
  },

  culture: {
    eyebrow: "Con người Meli",
    founder: { name: "Nguyễn Thanh Tâm", role: "Founder & CEO" },
    title: "Con\u00A0người là hạ\u00A0tầng bền\u00A0vững nhất",
    lead:
      "Công nghệ có thể thay đổi. Thuật toán có thể thay đổi. Thị trường cũng có thể thay đổi mỗi ngày. Nhưng điều Meli lựa chọn giữ lại là con người, chữ Tín và cách chúng ta đối xử với nhau.",
    body:
      "Tại Meli Network, chúng tôi tin rằng một đội ngũ tốt không chỉ được tạo nên bởi năng lực, mà còn bởi cái Tâm, tinh thần trách nhiệm và sự tử tế trong cách làm việc.",
    commitments: [
      { who: "Với Creator", desc: "Chúng tôi trân trọng công sức, thời gian và niềm tin mà họ dành cho Meli." },
      { who: "Với Thương hiệu", desc: "Chúng tôi đề cao sự minh bạch, hiệu quả và trách nhiệm với từng kết quả." },
      { who: "Với Cộng đồng", desc: "Chúng tôi hướng đến những giá trị tích cực và bền vững, thay vì những thành quả ngắn hạn." },
    ],
    valuesIntro: "Ba điều Meli luôn giữ trong cách làm việc",
    values: [
      { title: "Làm việc có Tâm", desc: "Đặt sự tử tế và giá trị thật vào trong từng việc mình làm." },
      { title: "Giữ chữ Tín", desc: "Trân trọng mọi cam kết và xây dựng uy tín bằng hành động." },
      { title: "Có trách nhiệm", desc: "Không chỉ hoàn thành công việc, mà cùng chịu trách nhiệm với kết quả và những giá trị mình tạo ra." },
    ],
    closing: "Làm việc bằng năng lực. Đồng hành bằng cái Tâm. Giữ nhau bằng chữ Tín.",
  },

  contact: {
    eyebrow: "Bắt đầu kết nối",
    title: "Hãy cùng Meli tạo nên giá\u00A0trị từ nội\u00A0dung",
    desc:
      "Bạn là thương hiệu cần triển khai một chiến dịch, Creator đang tìm kiếm một hệ sinh thái đồng hành, hay đối tác muốn cùng phát triển? Hãy để lại thông tin, đội ngũ Meli sẽ kết nối với bạn.",
    form: {
      name: "Họ và tên",
      namePh: "Nguyễn Văn A",
      email: "Email",
      emailPh: "ban@congty.vn",
      phone: "Số điện thoại",
      phonePh: "09xx xxx xxx",
      topic: "Bạn quan tâm tới",
      topics: [
        "Tham gia mạng lưới (Creator)",
        "Dịch vụ truyền thông — marketing",
        "Thương mại điện tử & affiliate",
        "Hợp tác khác",
      ],
      message: "Nội dung",
      messagePh: "Mô tả ngắn về kênh, thương hiệu hoặc nhu cầu của bạn…",
      submit: "Gửi thông tin",
      sending: "Đang gửi…",
      success: "Đã nhận được thông tin. Meli sẽ liên hệ lại với bạn sớm nhất.",
      error: "Gửi chưa thành công. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.",
      required: "Vui lòng điền đầy đủ họ tên, email và nội dung.",
      privacy: "Thông tin của bạn chỉ được dùng để liên hệ về yêu cầu này.",
    },
    info: [
      {
        label: "Văn phòng",
        value: "Khu nhà vườn 12, ngõ 13 Lĩnh Nam, Vĩnh Tuy, Hà Nội",
      },
      { label: "Email", value: "contact@melinetwork.vn", href: "mailto:contact@melinetwork.vn" },
      // Hiển thị dạng nội địa, link bấm gọi dùng dạng quốc tế để gọi được từ nước ngoài
      { label: "Điện thoại", value: "0559 476 329", href: "tel:+84559476329" },
    ],
  },

  footer: {
    tagline: "Hệ sinh thái sáng tạo nội dung & thương mại số.",
    colTitleNav: "Khám phá",
    colTitleServices: "Dịch vụ",
    colTitleContact: "Liên hệ",
    services: ["Meli Creator Network", "Meli Media", "Meli Commerce"],
    socialTitle: "Theo dõi Meli",
    socials: [{ name: "Facebook", href: "https://www.facebook.com/MeliChannell" }],
    legal: "Bản quyền thuộc về Meli Network.",
    company: "CÔNG TY TNHH MELI CHANNEL — MST: 0111356259",
    backToTop: "Lên đầu trang",
  },
};

/* ------------------------------------------------------------------------- */

const en: typeof vi = {
  meta: {
    title: "Meli Network — Creative content & digital commerce ecosystem",
    description:
      "Meli Network connects creators, brands and consumers: multi-channel management (MCN), integrated media campaigns and e-commerce operations.",
  },

  nav: {
    items: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#cases", label: "Work" },
      { href: "#partners", label: "Partners" },
      { href: "#culture", label: "People" },
    ],
    cta: "Work with us",
    menu: "Open menu",
    close: "Close menu",
  },

  hero: {
    eyebrow: "MCN · Media Agency · Digital Commerce",
    titleLead: "Turning creative content into",
    titleAccent: "sustainable growth",
    desc:
      "Meli Network is an ecosystem built alongside Vietnamese creators and brands — from growing multi-platform channels and running integrated campaigns, to operating storefronts across major marketplaces.",
    ctaPrimary: "Partner with Meli",
    ctaSecondary: "Explore the ecosystem",
    scroll: "Scroll",
  },

  stats: {
    note: "Figures from the most recent quarter",
    items: [
      { value: "100", suffix: "+", label: "Channels & creators in the network" },
      { value: "500", suffix: "M", label: "Monthly views generated" },
      { value: "150", suffix: "+", label: "Brand campaigns delivered" },
    ],
  },

  about: {
    eyebrow: "An ecosystem connecting Creator, Media & Commerce",
    title: "From good content to real value",
    lead:
      "At Meli Network we believe good content doesn't stop at view counts. Its value appears when there is a capable system behind it — one that nurtures people, develops content, connects brands and produces real outcomes.",
    body: [
      "Starting from a team that ran media channels, Meli Network grew step by step into an ecosystem connecting Creator – Media – Commerce, where resources are linked end to end to create value together.",
      "From developing and standing beside creators, building content with real influence, and running media and marketing activity, through to bringing content directly to the point of commercial conversion — Meli connects every link in a single system.",
    ],
    closing: ["We don't just make content.", "We build the system that turns content into value."],
    pillars: [
      { title: "Transparent", desc: "Clear on partnership terms, revenue and entitlements, so every partner knows exactly where they stand." },
      { title: "Sustainable", desc: "We prioritise long-term value and stable partnerships that grow together, rather than chasing short-term results." },
      { title: "Effective", desc: "Every activity is optimised against real data and performance, so decisions are accurate and outcomes measurable." },
    ],
  },

  services: {
    eyebrow: "Core capabilities",
    title: "Three core capabilities – one complete ecosystem",
    desc: [
      "From content creation to digital commerce, Meli Network connects three core capabilities in one unified ecosystem: Creator – Media & Marketing – Commerce.",
      "Rather than running each activity in isolation, Meli acts as the single connecting point, helping creators and brands reach the right resources, simplifying execution and improving operational effectiveness.",
      "Every piece of content is made to do more than attract attention — it is built toward something larger: building the brand, creating connection, and converting into real results.",
    ],
    items: [
      {
        tag: "01",
        name: "Meli Creator Network",
        kicker: "MCN · Multi-platform creator network",
        desc: "Standing beside creators on TikTok, YouTube and Facebook — from channel growth and content optimisation to revenue and rights.",
        points: [
          "Multi-platform channel growth & optimisation",
          "Content rights management & protection",
          "Transparent revenue reconciliation & payouts",
          "Training & operational support for creators",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Agency · Communications & marketing",
        desc: "Working with brands from strategy and creative through execution and measurement, connecting content with the right target audience.",
        points: [
          "Communications strategy & brand positioning",
          "KOL/KOC marketing by product category",
          "TVC, video, photo & social content production",
          "Multi-platform advertising & performance measurement",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Affiliate · Social commerce",
        desc: "Working with brands from storefront operations and livestreaming to affiliate, connecting content with conversion and optimising commercial results.",
        points: [
          "TikTok Shop & Shopee storefront operations",
          "Live selling with conversion-led scripting",
          "Building & running the affiliate network",
          "Category, pricing & commission advisory",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Selected work",
    title: "Numbers from the journey so far",
    desc: "The figures below reflect part of the scale we operate at and the results Meli has recorded while working alongside creators and brands.",
    items: [
      {
        title: "Turning creator and content strength into real commercial value",
        desc: "From content development through to conversion, Meli builds a value chain you can actually measure.",
      },
      {
        title: "300K+ followers — millions of likes",
        desc: "Honest, consistent content helps creators build lasting connections and hold their community's attention.",
      },
      {
        title: "Building a multi-topic content ecosystem",
        desc: "Turning everyday stories into content series that draw an audience and build a community.",
      },
      {
        title: "Turning creator influence into brand value",
        desc: "Weaving products into content naturally — from genuine experience through to brand connection.",
      },
    ],
  },

  partners: {
    eyebrow: "Trusted by partners",
    title: "Working alongside brands and platforms",
    desc: "Meli Network partners with major platforms and works alongside many brands across Creator, Marketing and Commerce.",
    logos: [
      { name: "Converse", src: "/logos/converse.png" },
      { name: "Puma", src: "/logos/puma.png" },
      { name: "Kappa", src: "/logos/kappa.png" },
      { name: "adidas", src: "/logos/adidas.png" },
      { name: "LocknLock", src: "/logos/locknlock.png" },
      { name: "Biti's", src: "/logos/bitis.png" },
      { name: "Sunhouse", src: "/logos/sunhouse.png" },
      { name: "Crocs", src: "/logos/crocs.png" },
    ],
    quotesTitle: "What partners and creators say",
    testimonials: [
      {
        quote:
          "Meli supports us closely — content development, channel operations, partnership opportunities. It genuinely feels like having a team behind you.",
        name: "",
        role: "",
      },
      {
        quote:
          "What I value about Meli is how clear and professional they are. Questions about revenue, partnerships or rights get handled quickly.",
        name: "",
        role: "",
      },
      {
        quote:
          "Meli understands how to match a brand with the right creator. The team is proactive, flexible and stays close to the campaign's goals.",
        name: "",
        role: "",
      },
    ],
  },

  culture: {
    eyebrow: "The people of Meli",
    founder: { name: "Nguyen Thanh Tam", role: "Founder & CEO" },
    title: "People are the most durable infrastructure",
    lead:
      "Technology changes. Algorithms change. The market can change by the day. What Meli chooses to hold on to is people, our word, and the way we treat one another.",
    body:
      "At Meli Network we believe a good team is built not only on capability, but on heart, a sense of responsibility, and decency in how the work gets done.",
    commitments: [
      { who: "With creators", desc: "We respect the effort, the time and the trust they place in Meli." },
      { who: "With brands", desc: "We hold ourselves to transparency, effectiveness and accountability for every result." },
      { who: "With the community", desc: "We aim for positive, lasting value rather than short-term wins." },
    ],
    valuesIntro: "Three things Meli always holds to",
    values: [
      { title: "Work with heart", desc: "Put decency and real value into every piece of work we do." },
      { title: "Keep our word", desc: "Honour every commitment and build trust through action." },
      { title: "Take responsibility", desc: "Not just finish the job, but share responsibility for the results and the value we create." },
    ],
    closing: "Working through capability. Partnering with heart. Holding together by our word.",
  },

  contact: {
    eyebrow: "Start the conversation",
    title: "Let's create value from content, together",
    desc:
      "A brand with a campaign to run, a creator looking for an ecosystem to grow with, or a partner who wants to build together? Leave your details and the Meli team will get in touch.",
    form: {
      name: "Full name",
      namePh: "Jane Nguyen",
      email: "Email",
      emailPh: "you@company.com",
      phone: "Phone number",
      phonePh: "+84 9xx xxx xxx",
      topic: "I'm interested in",
      topics: [
        "Joining the network (Creator)",
        "Media & marketing services",
        "E-commerce & affiliate",
        "Other partnerships",
      ],
      message: "Message",
      messagePh: "A short description of your channel, brand or requirement…",
      submit: "Send enquiry",
      sending: "Sending…",
      success: "Thanks — we've got your details and will be in touch shortly.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "Please fill in your name, email and message.",
      privacy: "Your details are only used to respond to this enquiry.",
    },
    info: [
      {
        label: "Office",
        value: "Khu nhà vườn 12, ngõ 13 Lĩnh Nam, Vĩnh Tuy, Hanoi, Vietnam",
      },
      { label: "Email", value: "contact@melinetwork.vn", href: "mailto:contact@melinetwork.vn" },
      { label: "Phone", value: "+84 559 476 329", href: "tel:+84559476329" },
    ],
  },

  footer: {
    tagline: "A creative content and digital commerce ecosystem.",
    colTitleNav: "Explore",
    colTitleServices: "Services",
    colTitleContact: "Contact",
    services: ["Meli Creator Network", "Meli Media", "Meli Commerce"],
    socialTitle: "Follow Meli",
    socials: [{ name: "Facebook", href: "https://www.facebook.com/MeliChannell" }],
    legal: "Meli Network. All rights reserved.",
    company: "MELI CHANNEL CO., LTD — Tax ID: 0111356259",
    backToTop: "Back to top",
  },
};

export const content = { vi, en } as const;
export type Content = typeof vi;
