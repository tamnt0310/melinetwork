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
    eyebrow: "Đôi nét về Meli",
    title: "Nội\u00A0dung tốt xứng\u00A0đáng có một hệ\u00A0thống tốt phía\u00A0sau",
    lead:
      "Meli Network bắt đầu từ một đội ngũ vận hành kênh nội dung, rồi lớn lên cùng chính những Creator mà chúng tôi đồng hành. Hôm nay Meli làm ba việc: phát triển Creator, triển khai chiến dịch cho thương hiệu, và chuyển nội dung thành doanh thu trên sàn.",
    body:
      "Ba mảng đó được đặt cạnh nhau có chủ đích. Một Creator trong mạng lưới có thể trở thành gương mặt của một chiến dịch thương hiệu, rồi thành người bán hàng hiệu quả trong phiên livestream — vẫn với một đội ngũ theo suốt từ đầu đến cuối.",
    pillars: [
      { title: "Minh bạch", desc: "Rõ ràng trong hợp tác, doanh thu và quyền lợi. Đảm bảo các thông tin và giá trị đối với đối tác." },
      { title: "Bền vững", desc: "Ưu tiên giá trị dài hạn, xây dựng mối quan hệ hợp tác ổn định và cùng phát triển thay vì chỉ tập trung vào kết quả ngắn hạn." },
      { title: "Hiệu quả", desc: "Mọi hoạt động được tối ưu dựa trên dữ liệu và hiệu suất thực tế, từ đó đưa ra quyết định chính xác và tạo ra kết quả đo lường được." },
    ],
  },

  services: {
    eyebrow: "Năng lực cốt lõi",
    title: "Ba mảng chuyên\u00A0sâu, làm\u00A0việc như một",
    desc:
      "Thay vì thuê ba đơn vị cho ba việc, thương hiệu và Creator chỉ làm việc với một đội ngũ. Sản xuất, phân phối và bán hàng nằm cùng một chỗ — nên ý tưởng không phải giải thích lại ba lần, và kết quả đo được từ đầu đến cuối.",
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
    title: "Kết\u00A0quả thật, chụp từ màn\u00A0hình",
    desc: "Bốn lát cắt từ công việc thường ngày của Meli: doanh thu thực trên sàn, những kênh đội ngũ đang đồng hành, và cách nội dung của Creator dẫn tới đơn hàng cho thương hiệu.",
    metricLabel: "Kết quả",
    items: [
      {
        title: "Biến sức mạnh Creator và Content thành giá trị thương mại thực",
        desc: "Từ phát triển nội dung đến chuyển đổi, Meli xây dựng chuỗi giá trị có thể đo lường.",
        metric: "13+ tỷ GMV từ mạng lưới Creator và Commerce",
      },
      {
        title: "300K+ Followers — Hàng triệu lượt yêu thích",
        desc: "Nội dung chân thật, nhất quán giúp Creator xây được kết nối lâu dài và giữ sức hút với cộng đồng của mình.",
        metric: "",
      },
      {
        title: "Xây dựng hệ sinh thái nội dung đa chủ đề",
        desc: "Biến câu chuyện đời sống thành những series nội dung có sức hút và cộng đồng.",
        metric: "",
      },
      {
        title: "Biến sức ảnh hưởng của Creator thành giá trị cho thương hiệu",
        desc: "Đưa sản phẩm vào nội dung một cách tự nhiên, từ trải nghiệm thực tế đến kết nối thương hiệu.",
        metric: "",
      },
    ],
  },

  partners: {
    eyebrow: "Niềm tin từ đối tác",
    title: "Niềm\u00A0tin từ những thương\u00A0hiệu & nền\u00A0tảng hàng\u00A0đầu",
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
    title: "Thứ khó sao\u00A0chép nhất là đội\u00A0ngũ",
    desc:
      "Công cụ thì ai cũng mua được. Thuật toán thì ai cũng phải học lại mỗi lần nền tảng đổi luật. Cái không mua được là một nhóm người hiểu nội dung, hiểu thị trường, và đã làm việc cùng nhau đủ lâu để biết phải xoay thế nào.",
    values: [
      { title: "Làm thật, đo thật", desc: "Không báo cáo màu mè. Mỗi con số đưa ra đều truy được về nguồn." },
      { title: "Creator là trung tâm", desc: "Mọi quy trình đều bắt đầu bằng một câu hỏi: điều này có tốt cho Creator không?" },
      { title: "Thử trước, bàn sau", desc: "Nền tảng đổi luật liên tục. Đội ngũ Meli chọn thử ngay trên kênh thật thay vì ngồi chờ hướng dẫn." },
    ],
    invite: {
      title: "Mọi hợp\u00A0tác đều bắt\u00A0đầu từ một cuộc trò\u00A0chuyện",
      desc: "Dù bạn là Creator muốn phát triển kênh hay thương hiệu cần triển khai chiến dịch, việc đầu tiên đội ngũ Meli làm là ngồi nghe bạn kể về mục tiêu của mình — trước khi đề xuất bất cứ điều gì.",
      cta: "Trò chuyện cùng đội ngũ Meli",
    },
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
    eyebrow: "About Meli",
    title: "Good content deserves a good system behind it",
    lead:
      "Meli Network started as a small team running content channels, and grew up alongside the very creators we work with. Today Meli does three things: develop creators, run campaigns for brands, and turn content into marketplace revenue.",
    body:
      "Those three sit together on purpose. A creator in the network can become the face of a brand campaign, then a high-performing seller on a livestream — with the same team alongside them the whole way.",
    pillars: [
      { title: "Transparent", desc: "Clear on partnership terms, revenue and entitlements, so every partner knows exactly where they stand." },
      { title: "Sustainable", desc: "We prioritise long-term value and stable partnerships that grow together, rather than chasing short-term results." },
      { title: "Effective", desc: "Every activity is optimised against real data and performance, so decisions are accurate and outcomes measurable." },
    ],
  },

  services: {
    eyebrow: "Core capabilities",
    title: "Three specialist arms that work as one",
    desc:
      "Instead of hiring three agencies for three jobs, brands and creators work with a single team. Production, distribution and selling sit in one place — so an idea never has to be explained three times, and results are measurable end to end.",
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
    title: "Real results, straight off the screen",
    desc: "Four slices of Meli's everyday work: actual marketplace revenue, the channels our team is growing, and how creator content turns into orders for a brand.",
    metricLabel: "Result",
    items: [
      {
        title: "Turning creator and content strength into real commercial value",
        desc: "From content development through to conversion, Meli builds a value chain you can actually measure.",
        metric: "13B+ VND GMV across the creator network and commerce",
      },
      {
        title: "300K+ followers — millions of likes",
        desc: "Honest, consistent content helps creators build lasting connections and hold their community's attention.",
        metric: "",
      },
      {
        title: "Building a multi-topic content ecosystem",
        desc: "Turning everyday stories into content series that draw an audience and build a community.",
        metric: "",
      },
      {
        title: "Turning creator influence into brand value",
        desc: "Weaving products into content naturally — from genuine experience through to brand connection.",
        metric: "",
      },
    ],
  },

  partners: {
    eyebrow: "Trusted by partners",
    title: "Trust from the leading brands and platforms",
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
    title: "The hardest thing to copy is a team",
    desc:
      "Anyone can buy the tools. Everyone has to relearn the algorithm each time a platform changes the rules. What you can't buy is a group of people who understand content, understand the market, and have worked together long enough to know how to adapt.",
    values: [
      { title: "Real work, real numbers", desc: "No decorative reporting. Every figure we quote traces back to a source." },
      { title: "Creator at the centre", desc: "Every process starts with one question: is this good for the creator?" },
      { title: "Test first, discuss after", desc: "Platforms change the rules constantly. Our team tests on real channels rather than waiting for guidance." },
    ],
    invite: {
      title: "Every partnership starts with a conversation",
      desc: "Whether you're a creator looking to grow a channel or a brand with a campaign to run, the first thing our team does is listen to your goals — before proposing anything at all.",
      cta: "Talk to the Meli team",
    },
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
