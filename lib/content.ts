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
    title: "Một hệ sinh\u00A0thái, ba năng\u00A0lực, cùng một mục\u00A0tiêu",
    lead:
      "Meli Network được xây dựng trên niềm tin rằng nội dung tốt xứng đáng có một hệ thống tốt phía sau. Chúng tôi không chỉ quản lý kênh — chúng tôi xây dựng nền tảng để nhà sáng tạo sống được bằng nghề và để thương hiệu chạm đúng người cần chạm.",
    body:
      "Từ một nhóm nhỏ vận hành kênh nội dung, Meli đã phát triển thành hệ sinh thái khép kín: mạng lưới đa kênh (MCN), đơn vị truyền thông — marketing, và bộ phận thương mại số. Ba mảng này không hoạt động rời rạc mà bổ trợ cho nhau — một nhà sáng tạo trong mạng lưới có thể trở thành gương mặt của chiến dịch thương hiệu, rồi trở thành người bán hàng hiệu quả trên sàn.", // ⚠️ MẪU
    pillars: [
      { title: "Minh bạch", desc: "Doanh thu, hợp đồng và quyền lợi được công khai rõ ràng với mọi đối tác." },
      { title: "Dài hạn", desc: "Chúng tôi chọn đi cùng nhau nhiều năm thay vì tối ưu một chiến dịch." },
      { title: "Dữ liệu", desc: "Mọi quyết định nội dung đều dựa trên số liệu hiệu suất thực tế." },
    ],
  },

  services: {
    eyebrow: "Năng lực cốt lõi",
    title: "Ba mảng vận\u00A0hành, một đầu\u00A0mối duy\u00A0nhất",
    desc:
      "Thương hiệu và nhà sáng tạo chỉ cần làm việc với một đội ngũ. Phần còn lại — từ sản xuất tới phân phối và bán hàng — Meli lo.",
    items: [
      {
        tag: "01",
        name: "Meli Creator Network",
        kicker: "MCN — Mạng lưới đa kênh",
        desc: "Đồng hành cùng nhà sáng tạo trên YouTube, TikTok và Facebook: từ định hướng nội dung tới tối ưu doanh thu và bảo vệ bản quyền.",
        points: [
          "Phát triển & tối ưu kênh đa nền tảng",
          "Bảo hộ bản quyền, xử lý gậy bản quyền",
          "Đối soát & thanh toán doanh thu minh bạch",
          "Đào tạo, hỗ trợ pháp lý và thuế cho creator",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Agency Truyền thông — Marketing",
        desc: "Xây dựng và triển khai chiến dịch truyền thông tích hợp cho thương hiệu, từ ý tưởng tới kết quả đo đếm được.",
        points: [
          "Chiến lược truyền thông & định vị thương hiệu",
          "Booking KOL / KOC theo ngành hàng",
          "Sản xuất nội dung: TVC, viral clip, photo",
          "Quảng cáo đa nền tảng & báo cáo hiệu suất",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Affiliate & Thương mại số",
        desc: "Chuyển lượt xem thành đơn hàng: vận hành gian hàng, livestream bán hàng và mạng lưới tiếp thị liên kết.",
        points: [
          "Vận hành gian hàng TikTok Shop, Shopee",
          "Livestream bán hàng & kịch bản chuyển đổi",
          "Mạng lưới affiliate quy mô lớn",
          "Tư vấn ngành hàng, giá và chính sách hoa hồng",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Dự án tiêu biểu",
    title: "Kết\u00A0quả nói thay lời giới\u00A0thiệu",
    desc: "Một vài chiến dịch và dự án Meli đã đồng hành trong thời gian gần đây.", // ⚠️ MẪU
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
    eyebrow: "Niềm tin của đối tác",
    title: "Được lựa\u00A0chọn bởi các thương\u00A0hiệu và nền\u00A0tảng",
    desc: "Meli Network là đối tác chính thức của các nền tảng lớn và đồng hành cùng nhiều nhãn hàng trong nước.", // ⚠️ MẪU
    // ⚠️ MẪU — thay bằng logo thật (xem hướng dẫn trong README)
    logos: ["YouTube", "TikTok", "Meta", "Shopee", "Google Ads", "Lazada", "Spotify", "Zalo"],
    testimonial: {
      quote:
        "Điều khiến chúng tôi gắn bó với Meli không phải là con số của một chiến dịch, mà là cách đội ngũ chủ động báo cáo, phản hồi và giữ đúng cam kết trong suốt hai năm hợp tác.",
      name: "Nguyễn Văn A", // ⚠️ MẪU
      role: "Giám đốc Marketing, Thương hiệu đối tác", // ⚠️ MẪU
    },
  },

  culture: {
    eyebrow: "Inside Meli",
    title: "Con\u00A0người là hạ\u00A0tầng thật\u00A0sự của chúng\u00A0tôi",
    desc:
      "Công nghệ và nền tảng thay đổi mỗi năm. Thứ giữ Meli đứng vững là một đội ngũ hiểu nội dung, hiểu thị trường và hiểu nhau.",
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
    title: "One ecosystem, three capabilities, a single goal",
    lead:
      "Meli Network was built on a simple belief: good content deserves a good system behind it. We don't just manage channels — we build the infrastructure that lets creators make a living and lets brands reach the people who matter.",
    body:
      "What began as a small team running content channels has grown into a closed-loop ecosystem: a multi-channel network, a media and marketing arm, and a digital commerce unit. The three don't operate in isolation — a creator in the network can become the face of a brand campaign, and then a high-performing seller on marketplace livestreams.",
    pillars: [
      { title: "Transparent", desc: "Revenue, contracts and entitlements are laid out clearly for every partner." },
      { title: "Long-term", desc: "We choose to walk together for years rather than optimise a single campaign." },
      { title: "Data-led", desc: "Every content decision is grounded in real performance numbers." },
    ],
  },

  services: {
    eyebrow: "Core capabilities",
    title: "Three operating arms, one point of contact",
    desc:
      "Brands and creators work with a single team. Everything else — production, distribution, selling — sits with Meli.",
    items: [
      {
        tag: "01",
        name: "Meli Creator Network",
        kicker: "MCN — Multi-channel network",
        desc: "Standing beside creators on YouTube, TikTok and Facebook: from content direction to revenue optimisation and rights protection.",
        points: [
          "Multi-platform channel growth & optimisation",
          "Copyright protection and strike resolution",
          "Transparent revenue reconciliation & payouts",
          "Training, legal and tax support for creators",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Media & marketing agency",
        desc: "Building and running integrated campaigns for brands, from the first idea to measurable outcomes.",
        points: [
          "Communications strategy & brand positioning",
          "KOL / KOC booking by product category",
          "Content production: TVC, viral clips, photography",
          "Multi-platform advertising & performance reporting",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Affiliate & digital commerce",
        desc: "Turning views into orders: storefront operations, live commerce and a large-scale affiliate network.",
        points: [
          "TikTok Shop & Shopee storefront operations",
          "Live selling with conversion-led scripting",
          "Large-scale affiliate network activation",
          "Category, pricing and commission advisory",
        ],
      },
    ],
  },

  cases: {
    eyebrow: "Selected work",
    title: "Results speak louder than a deck",
    desc: "A few of the campaigns and projects Meli has recently worked on.",
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
    eyebrow: "Trusted by",
    title: "Chosen by leading brands and platforms",
    desc: "Meli Network is an official partner of major platforms and works with brands across Vietnam.",
    logos: ["YouTube", "TikTok", "Meta", "Shopee", "Google Ads", "Lazada", "Spotify", "Zalo"],
    testimonial: {
      quote:
        "What kept us with Meli wasn't the numbers from one campaign — it was how proactively the team reported, responded and kept their commitments across two years of work.",
      name: "Nguyen Van A",
      role: "Marketing Director, partner brand",
    },
  },

  culture: {
    eyebrow: "Inside Meli",
    title: "People are our real infrastructure",
    desc:
      "Technology and platforms change every year. What keeps Meli standing is a team that understands content, understands the market, and understands each other.",
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
