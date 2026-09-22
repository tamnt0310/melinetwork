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
    eyebrow: "Hệ sinh thái kết nối Creator, Content & Commerce",
    title: "Từ Content đến giá\u00A0trị thực",
    // Cụm nằm giữa **...** được in đậm trên trang (xem lib/rich.tsx)
    lead:
      "Meli Network là hệ sinh thái **Creator, Content & Commerce**, đồng hành cùng Creator trong phát triển kênh, nội dung và thương hiệu cá nhân; đồng thời kết nối Creator với Brand và các cơ hội hợp tác.",
    body: [
      "Meli đứng phía sau Creator và Brand, cùng tham gia từ **phát triển con người, xây dựng nội dung, kết nối cơ hội đến triển khai và thương mại hóa**.",
      "Thông qua 3 trụ cột **Meli MCN – Meli Media – Meli Commerce**, Meli kết nối Creator, Brand và Content thành một hệ thống liền mạch, hướng tới những giá trị và kết quả thực tế.",
    ],
    closing: ["Meli không chỉ tạo ra Content.", "Meli xây dựng hệ thống để Content tạo ra giá trị."],
    pillars: [
      { title: "Tận tâm", desc: "Đặt con người lên hàng đầu, chủ động đồng hành và sát sao trong từng công việc." },
      { title: "Minh bạch", desc: "Rõ ràng trong cách làm việc, quyền lợi, doanh thu và cam kết với Creator và Brand." },
      { title: "Hiệu quả", desc: "Tập trung vào giải pháp thực tế, tối ưu nguồn lực và hướng đến kết quả cụ thể." },
    ],
    tagline: ["Build Creators.", "Build Influence.", "Build Revenue."],
  },

  services: {
    eyebrow: "Năng lực cốt lõi",
    title: "Ba năng\u00A0lực cốt\u00A0lõi – Một hệ sinh\u00A0thái",
    desc: [
      "Meli Network kết nối ba năng lực Creator – Media – Commerce trong một hệ sinh thái thống nhất, tạo nên hành trình liền mạch từ phát triển Creator, xây dựng Content đến tạo ra giá trị thương mại.",
      "Mỗi năng lực đảm nhận một vai trò riêng nhưng cùng hướng đến một mục tiêu: giúp Creator phát triển, giúp Brand kết nối và giúp Content tạo ra giá trị thực tế.",
    ],
    items: [
      {
        tag: "01",
        name: "Meli MCN",
        kicker: "Build Creators · Phát triển Creator",
        desc: "Đồng hành cùng Creator/KOC/KOL trong quá trình xây dựng kênh, phát triển nội dung, thương hiệu cá nhân và mở rộng cơ hội thu nhập.",
        points: [
          "Phát triển kênh & nội dung",
          "Định hướng thương hiệu cá nhân",
          "Đào tạo & hỗ trợ vận hành",
          "Kết nối cơ hội Booking, Affiliate & Livestream",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Build Influence · Kết nối Creator & Brand",
        desc: "Kết nối Brand với Creator phù hợp và triển khai các hoạt động Creator Marketing & Social Media, tạo ra nội dung và sức ảnh hưởng phù hợp với mục tiêu thương hiệu.",
        points: [
          "Kết nối Creator & Brand",
          "Creator Marketing & Content Campaign",
          "Triển khai Social Media",
          "Quản lý & tối ưu chiến dịch",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Build Revenue · Chuyển hóa Content thành doanh thu",
        desc: "Khai thác sức mạnh của Creator và Content thông qua Affiliate, Livestream & Social Commerce, kết nối nội dung với hành vi mua hàng và doanh thu.",
        points: [
          "Affiliate",
          "Livestream Commerce",
          "Social Commerce",
          "Tối ưu chuyển đổi & doanh thu",
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
        name: "Th* H*",
        role: "Creator",
      },
      {
        quote:
          "Điều mình đánh giá cao ở Meli là cách làm việc rõ ràng và chuyên nghiệp. Các vấn đề về doanh thu, hợp tác hay bản quyền đều được team hỗ trợ khá nhanh.",
        name: "Anh N** Nguyễn",
        role: "Đại diện Brand M*** M***",
      },
      {
        quote:
          "Meli hiểu khá rõ cách kết nối thương hiệu với Creator phù hợp. Team chủ động, linh hoạt và bám sát mục tiêu của chiến dịch.",
        name: "Chị H* Ph****",
        role: "Đại diện T**T**",
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
    tagline: "Hệ sinh thái sáng tạo nội dung & thương\u00A0mại\u00A0số.",
    colTitleNav: "Khám phá",
    colTitleServices: "Dịch vụ",
    colTitleContact: "Liên hệ",
    services: ["Meli MCN", "Meli Media", "Meli Commerce"],
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
    eyebrow: "An ecosystem connecting Creator, Content & Commerce",
    title: "From content to real value",
    lead:
      "Meli Network is a **Creator, Content & Commerce** ecosystem, standing beside creators as they grow their channels, content and personal brands — while connecting them with brands and partnership opportunities.",
    body: [
      "Meli works behind both creators and brands, involved all the way from **developing people and building content to connecting opportunities, execution and monetisation**.",
      "Through three pillars — **Meli MCN – Meli Media – Meli Commerce** — Meli connects creators, brands and content into one seamless system, aimed at real value and real results.",
    ],
    closing: ["Meli doesn't just create content.", "Meli builds the system that turns content into value."],
    pillars: [
      { title: "Dedicated", desc: "People come first — we stay close and hands-on in every piece of work." },
      { title: "Transparent", desc: "Clear in how we work, and in rights, revenue and commitments with creators and brands." },
      { title: "Effective", desc: "Focused on practical solutions, optimised resources and concrete results." },
    ],
    tagline: ["Build Creators.", "Build Influence.", "Build Revenue."],
  },

  services: {
    eyebrow: "Core capabilities",
    title: "Three core capabilities – one ecosystem",
    desc: [
      "Meli Network connects three capabilities — Creator, Media and Commerce — in one unified ecosystem, creating a seamless journey from developing creators and building content to generating commercial value.",
      "Each capability plays its own role, but all share one goal: helping creators grow, helping brands connect, and helping content create real value.",
    ],
    items: [
      {
        tag: "01",
        name: "Meli MCN",
        kicker: "Build Creators · Creator development",
        desc: "Working with creators, KOCs and KOLs as they build their channels, grow their content and personal brands, and expand their income opportunities.",
        points: [
          "Channel & content development",
          "Personal brand direction",
          "Training & operational support",
          "Booking, affiliate & livestream opportunities",
        ],
      },
      {
        tag: "02",
        name: "Meli Media",
        kicker: "Build Influence · Connecting creators & brands",
        desc: "Matching brands with the right creators and running creator marketing and social media activity, producing content and influence aligned with brand goals.",
        points: [
          "Creator & brand matching",
          "Creator marketing & content campaigns",
          "Social media execution",
          "Campaign management & optimisation",
        ],
      },
      {
        tag: "03",
        name: "Meli Commerce",
        kicker: "Build Revenue · Turning content into revenue",
        desc: "Harnessing creators and content through affiliate, livestream and social commerce, linking content to buying behaviour and revenue.",
        points: [
          "Affiliate",
          "Livestream commerce",
          "Social commerce",
          "Conversion & revenue optimisation",
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
        name: "Th* H*",
        role: "Creator",
      },
      {
        quote:
          "What I value about Meli is how clear and professional they are. Questions about revenue, partnerships or rights get handled quickly.",
        name: "Mr N** Nguyen",
        role: "Brand representative, M*** M***",
      },
      {
        quote:
          "Meli understands how to match a brand with the right creator. The team is proactive, flexible and stays close to the campaign's goals.",
        name: "Ms H* Ph****",
        role: "Brand representative, T**T**",
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
    tagline: "A creative content and digital\u00A0commerce\u00A0ecosystem.",
    colTitleNav: "Explore",
    colTitleServices: "Services",
    colTitleContact: "Contact",
    services: ["Meli MCN", "Meli Media", "Meli Commerce"],
    socialTitle: "Follow Meli",
    socials: [{ name: "Facebook", href: "https://www.facebook.com/MeliChannell" }],
    legal: "Meli Network. All rights reserved.",
    company: "MELI CHANNEL CO., LTD — Tax ID: 0111356259",
    backToTop: "Back to top",
  },
};

export const content = { vi, en } as const;
export type Content = typeof vi;
