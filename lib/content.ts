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
      "Meli Network kết nối nhà sáng tạo, thương hiệu và người tiêu dùng: quản lý kênh đa nền tảng (MCN), chiến dịch truyền thông và vận hành thương mại điện tử.",
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
      "Meli Network là hệ sinh thái đồng hành cùng nhà sáng tạo và thương hiệu Việt — từ phát triển kênh đa nền tảng, xây dựng chiến dịch truyền thông, đến vận hành bán hàng trên các sàn thương mại điện tử.",
    ctaPrimary: "Hợp tác cùng Meli",
    ctaSecondary: "Khám phá hệ sinh thái",
    scroll: "Cuộn xuống",
    // Nhãn nổi trên ảnh hero
    badge: { value: "Since 2019", label: "Đồng hành cùng nhà sáng tạo Việt" }, // ⚠️ MẪU — sửa năm thành lập
  },

  // ⚠️ MẪU — TOÀN BỘ SỐ LIỆU DƯỚI ĐÂY LÀ GIẢ ĐỊNH. Thay bằng số thật.
  stats: {
    note: "Số liệu cập nhật quý gần nhất", // ⚠️ MẪU
    items: [
      { value: "250", suffix: "+", label: "Kênh & nhà sáng tạo đồng hành" },
      { value: "1.2", suffix: " tỷ", label: "Lượt xem mỗi tháng" },
      { value: "180", suffix: "+", label: "Chiến dịch thương hiệu đã triển khai" },
      { value: "6", suffix: "", label: "Nền tảng vận hành song song" },
    ],
  },

  about: {
    eyebrow: "Đôi nét về Meli",
    title: "Một hệ sinh\u00A0thái ba năng\u00A0lực, cùng một mục\u00A0tiêu",
    lead:
      "Được xây dựng trên niềm tin rằng nội dung tốt xứng đáng có một hệ thống tốt phía sau. Meli Network xây dựng hệ sinh thái kết nối Creator, Content và Commerce — giúp nhà sáng tạo phát triển bền vững, thương hiệu tiếp cận đúng khách hàng và nội dung tạo ra giá trị thực.",
    body:
      "Từ một đội ngũ vận hành kênh nội dung, Meli phát triển thành hệ sinh thái gồm MCN, Media & Marketing và Commerce, kết nối xuyên suốt từ phát triển Creator → xây dựng nội dung → triển khai chiến dịch → thúc đẩy thương mại.",
    pillars: [
      { title: "Minh bạch", desc: "Rõ ràng trong hợp tác, doanh thu và quyền lợi. Đảm bảo các thông tin và giá trị đối với đối tác." },
      { title: "Bền vững", desc: "Ưu tiên giá trị dài hạn, xây dựng mối quan hệ hợp tác ổn định và cùng phát triển thay vì chỉ tập trung vào kết quả ngắn hạn." },
      { title: "Hiệu quả", desc: "Mọi hoạt động được tối ưu dựa trên dữ liệu và hiệu suất thực tế, từ đó đưa ra quyết định chính xác và tạo ra kết quả đo lường được." },
    ],
  },

  services: {
    eyebrow: "Năng lực cốt lõi",
    title: "Ba năng\u00A0lực, một hệ sinh\u00A0thái",
    desc:
      "Kết nối toàn bộ chuỗi giá trị từ Creator, Content đến Commerce trong một hệ thống thống nhất. Meli đồng hành cùng thương hiệu và nhà sáng tạo từ phát triển nội dung, truyền thông đến thương mại — với một đầu mối quản lý xuyên suốt, tối ưu nguồn lực và hiệu quả triển khai.",
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
    title: "Những con\u00A0số nói lên năng\u00A0lực",
    desc: "Khám phá các chiến dịch và dự án tiêu biểu, nơi năng lực của Meli được thể hiện qua những kết quả thực tế.",
    metricLabel: "Kết quả",
    // ⚠️ MẪU — Thay bằng case study thật (tên khách hàng cần có sự đồng ý trước khi công bố)
    items: [
      {
        client: "Thương hiệu FMCG",
        title: "Chiến dịch ra mắt sản phẩm với 40 KOC",
        desc: "Xây dựng làn sóng review đồng loạt trên TikTok và Facebook trong 3 tuần, kết hợp livestream chốt đơn cuối chiến dịch.",
        tags: ["Booking KOC", "TikTok", "Livestream"],
        metric: "18 triệu lượt tiếp cận",
      },
      {
        client: "Nhà sáng tạo giải trí",
        title: "Đưa kênh từ 50K lên 1 triệu người đăng ký",
        desc: "Tái định vị nội dung, chuẩn hoá lịch đăng và tối ưu tiêu đề — thumbnail theo dữ liệu trong 11 tháng.",
        tags: ["MCN", "YouTube", "Chiến lược nội dung"],
        metric: "Tăng trưởng 20 lần",
      },
      {
        client: "Nhãn hàng mỹ phẩm",
        title: "Vận hành gian hàng TikTok Shop trọn gói",
        desc: "Thiết lập gian hàng, xây đội livestream thường trực 8 tiếng/ngày và kích hoạt mạng lưới affiliate.",
        tags: ["E-commerce", "Livestream", "Affiliate"],
        metric: "GMV tăng 6 lần sau 6 tháng",
      },
      {
        client: "Thương hiệu công nghệ",
        title: "Series nội dung thương hiệu dài hạn",
        desc: "Sản xuất series 12 tập phát đa nền tảng, kết hợp hệ thống kênh nội bộ của Meli để phân phối.",
        tags: ["Production", "Multi-platform"],
        metric: "4.5 triệu lượt xem / tập",
      },
    ],
  },

  partners: {
    eyebrow: "Niềm tin từ đối tác",
    title: "Được tin\u00A0tưởng bởi các thương\u00A0hiệu và nền\u00A0tảng",
    desc: "Meli Network là đối tác của các nền tảng lớn và đồng hành cùng nhiều thương hiệu trong các hoạt động Creator, Marketing và Commerce.",
    // ⚠️ MẪU — thay bằng logo thật (xem hướng dẫn trong README)
    logos: ["YouTube", "TikTok", "Meta", "Shopee", "Google Ads", "Lazada", "Spotify", "Zalo"],
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
    eyebrow: "Inside Meli",
    title: "Con\u00A0người là hạ\u00A0tầng thật\u00A0sự của chúng\u00A0tôi",
    desc:
      "Công nghệ có thể thay đổi mỗi năm. Điều giữ Meli phát triển là đội ngũ hiểu nội dung, hiểu thị trường và hiểu cách cùng nhau tạo ra giá trị.",
    values: [
      { title: "Làm thật, đo thật", desc: "Không báo cáo màu mè. Con số nào cũng phải truy được về nguồn." },
      { title: "Creator là trung tâm", desc: "Mọi quy trình đều bắt đầu bằng câu hỏi: điều này có tốt cho nhà sáng tạo không?" },
      { title: "Học nhanh hơn thuật toán", desc: "Nền tảng đổi luật liên tục — đội ngũ Meli đổi cách làm còn nhanh hơn." },
    ],
    jobs: {
      title: "Chúng\u00A0tôi đang tìm thêm người đồng\u00A0hành",
      desc: "Nếu bạn yêu nội dung số và muốn làm ở nơi mọi ý tưởng đều được thử, Meli đang mở cửa.",
      cta: "Xem vị trí đang tuyển",
      openings: "vị trí đang mở", // ⚠️ MẪU
      count: "7",
    },
  },

  contact: {
    eyebrow: "Bắt đầu hợp tác",
    title: "Kể cho chúng\u00A0tôi nghe về dự\u00A0án của bạn",
    desc:
      "Dù bạn là nhà sáng tạo đang tìm một mạng lưới đồng hành, hay thương hiệu cần một đội ngũ triển khai — hãy để lại thông tin, Meli sẽ phản hồi trong vòng 24 giờ làm việc.",
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
    // ⚠️ MẪU — thay bằng thông tin liên hệ thật
    info: [
      { label: "Văn phòng", value: "Tầng X, Toà nhà Y, Quận Z, TP. Hà Nội" },
      { label: "Email", value: "contact@melinetwork.vn", href: "mailto:contact@melinetwork.vn" },
      { label: "Hotline", value: "1900 xxxx", href: "tel:1900xxxx" },
    ],
  },

  footer: {
    tagline: "Hệ sinh thái sáng tạo nội dung & thương mại số.",
    colTitleNav: "Khám phá",
    colTitleServices: "Dịch vụ",
    colTitleContact: "Liên hệ",
    services: ["Meli Creator Network", "Meli Media", "Meli Commerce"],
    socialTitle: "Theo dõi Meli",
    // ⚠️ MẪU — thay bằng link mạng xã hội thật
    socials: [
      { name: "YouTube", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
    legal: "Bản quyền thuộc về Meli Network.",
    company: "CÔNG TY TNHH MELI NETWORK — MST: 0xxxxxxxxx", // ⚠️ MẪU
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
    badge: { value: "Since 2019", label: "Standing beside Vietnamese creators" },
  },

  stats: {
    note: "Figures from the most recent quarter",
    items: [
      { value: "250", suffix: "+", label: "Channels & creators in the network" },
      { value: "1.2", suffix: "B", label: "Monthly views generated" },
      { value: "180", suffix: "+", label: "Brand campaigns delivered" },
      { value: "6", suffix: "", label: "Platforms operated in parallel" },
    ],
  },

  about: {
    eyebrow: "About Meli",
    title: "One ecosystem of three capabilities, one goal",
    lead:
      "Built on the belief that good content deserves a good system behind it. Meli Network connects Creator, Content and Commerce — helping creators grow sustainably, brands reach the right customers, and content turn into real value.",
    body:
      "From a team running content channels, Meli grew into an ecosystem spanning MCN, Media & Marketing and Commerce — connected end to end, from developing creators → building content → running campaigns → driving commerce.",
    pillars: [
      { title: "Transparent", desc: "Clear on partnership terms, revenue and entitlements, so every partner knows exactly where they stand." },
      { title: "Sustainable", desc: "We prioritise long-term value and stable partnerships that grow together, rather than chasing short-term results." },
      { title: "Effective", desc: "Every activity is optimised against real data and performance, so decisions are accurate and outcomes measurable." },
    ],
  },

  services: {
    eyebrow: "Core capabilities",
    title: "Three capabilities, one ecosystem",
    desc:
      "Connecting the whole value chain — Creator, Content and Commerce — in one unified system. Meli works alongside brands and creators from content development through communications to commerce, with a single point of coordination that optimises both resources and execution.",
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
    title: "Numbers that show what we can do",
    desc: "A look at the campaigns and projects where Meli's capability shows up in real results.",
    metricLabel: "Result",
    items: [
      {
        client: "FMCG brand",
        title: "Product launch powered by 40 KOCs",
        desc: "A coordinated review wave across TikTok and Facebook over three weeks, closed out with a conversion livestream.",
        tags: ["KOC booking", "TikTok", "Live commerce"],
        metric: "18M people reached",
      },
      {
        client: "Entertainment creator",
        title: "From 50K to 1 million subscribers",
        desc: "Repositioned the content, standardised the publishing rhythm and optimised titles and thumbnails against data over 11 months.",
        tags: ["MCN", "YouTube", "Content strategy"],
        metric: "20× growth",
      },
      {
        client: "Cosmetics label",
        title: "End-to-end TikTok Shop operations",
        desc: "Set up the storefront, staffed a permanent eight-hour daily live team and activated the affiliate network.",
        tags: ["E-commerce", "Live selling", "Affiliate"],
        metric: "6× GMV in six months",
      },
      {
        client: "Technology brand",
        title: "A long-running branded content series",
        desc: "Produced a 12-episode series distributed across platforms, amplified through Meli's own channel network.",
        tags: ["Production", "Multi-platform"],
        metric: "4.5M views per episode",
      },
    ],
  },

  partners: {
    eyebrow: "Trusted by partners",
    title: "Trusted by leading brands and platforms",
    desc: "Meli Network partners with major platforms and works alongside many brands across Creator, Marketing and Commerce.",
    logos: ["YouTube", "TikTok", "Meta", "Shopee", "Google Ads", "Lazada", "Spotify", "Zalo"],
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
    eyebrow: "Inside Meli",
    title: "People are our real infrastructure",
    desc:
      "Technology can change every year. What keeps Meli growing is a team that understands content, understands the market, and understands how to create value together.",
    values: [
      { title: "Real work, real numbers", desc: "No decorative reporting. Every figure has to trace back to a source." },
      { title: "Creator at the centre", desc: "Every process starts with one question: is this good for the creator?" },
      { title: "Learn faster than the algorithm", desc: "Platforms change the rules constantly — our team changes faster." },
    ],
    jobs: {
      title: "We're looking for more people to build with",
      desc: "If you love digital content and want to work somewhere every idea gets tested, Meli's door is open.",
      cta: "See open roles",
      openings: "open roles",
      count: "7",
    },
  },

  contact: {
    eyebrow: "Start a partnership",
    title: "Tell us about your project",
    desc:
      "Whether you're a creator looking for a network to grow with, or a brand that needs a team to execute — leave your details and Meli will respond within one business day.",
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
      { label: "Office", value: "Floor X, Building Y, District Z, Hanoi, Vietnam" },
      { label: "Email", value: "contact@melinetwork.vn", href: "mailto:contact@melinetwork.vn" },
      { label: "Hotline", value: "1900 xxxx", href: "tel:1900xxxx" },
    ],
  },

  footer: {
    tagline: "A creative content and digital commerce ecosystem.",
    colTitleNav: "Explore",
    colTitleServices: "Services",
    colTitleContact: "Contact",
    services: ["Meli Creator Network", "Meli Media", "Meli Commerce"],
    socialTitle: "Follow Meli",
    socials: [
      { name: "YouTube", href: "#" },
      { name: "TikTok", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
    legal: "Meli Network. All rights reserved.",
    company: "MELI NETWORK CO., LTD — Tax ID: 0xxxxxxxxx",
    backToTop: "Back to top",
  },
};

export const content = { vi, en } as const;
export type Content = typeof vi;
