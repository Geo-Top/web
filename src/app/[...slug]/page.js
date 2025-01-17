import Head from 'next/head';
import CourseStats from "../components/CourseStatItem";
import FaqSection from "../components/FaqSection";
import CustomerReviews from '../components/CustomerReviews';
import CertificatesSlider from '../components/CertificatesSlider';
import FirstSection from '../components/firstSession';
import FeaturedCourses from '../components/FeaturedCourses';
// import Header from '@/app/courses/components/Header';
// import Footer from '@/app/courses/components/Footer';

const Data = {
   courseDuration: "28 أسبوعًا",
   courseLectures: "56 محاضرة",
   courseHours: "200 ساعة",
   courseInstructor: "م. مؤمن",
   courseStudents: "126+",
   courseMode: "أونلاين"
};
const lang = "ar";
const faqData = [
  {
    question: "هل يتم تقديم الدورة عبر الإنترنت؟",
    answer:
      "نعم، يتم تقديم الدورة بالكامل عبر الإنترنت. يمكنك حضور الجلسات من منزلك أو أي مكان تختاره. يتيح لك ذلك التعلم بالوتيرة التي تناسبك وفي الوقت المناسب لك."
  },
  {
    question: "هل ستكون هناك تسجيلات فيديو للمراجعة لاحقًا؟",
    answer:
      "بالتأكيد! يتم تسجيل جميع الجلسات ويمكنك الوصول إليها في أي وقت. هذا يضمن أنك تستطيع مراجعة المحاضرات أو اللحاق بما فاتك في أي وقت."
  },
  {
    question: "هل سأحصل على شهادة معتمدة بعد الانتهاء؟",
    answer:
      "نعم، عند إتمام الدورة بنجاح، ستحصل على شهادة معتمدة من شركة جيو توب. تُعزز هذه الشهادة مهاراتك وتكون إضافة قيمة لملفك المهني."
  },
  {
    question: "هل الدورة مناسبة للمبتدئين أم للمتقدمين؟",
    answer:
      "تم تصميم الدورة خصيصًا للمبتدئين. تغطي الدورة المفاهيم الأساسية وتتدرج حتى الموضوعات الأكثر تقدمًا لضمان منح منحنى تعلم سلس للمبتدئين في برمجة الويب."
  },
  {
    question: "هل يوجد امتحانات أو مشاريع عملية في نهاية الدورة؟",
    answer:
      "نعم، تتضمن الدورة مشاريع عملية كجزء من منهجها. تسمح لك هذه المشاريع بتطبيق المفاهيم التي تعلمتها وتكون بمثابة مشروع تخرج يُظهر مهاراتك."
  },
  {
    question: "هل توجد خطة دفع بالتقسيط؟",
    answer:
      "نعم، نوفر خطة دفع بالتقسيط لجعل الدورة متاحة للجميع. يمكنك اختيار الدفع بالتقسيط بما يتناسب مع ميزانيتك."
  }
];
const testimonials = [
  { 
    name: 'صالح الحامدي', 
    opinion: "صراحة يا جماعة الدورة هذي كانت من أفضل القرارات اللي اتخذتها. تعلمت فيها كيف أكتب كود من الصفر وكيف أسوي مواقع احترافية. الباشمهندس كان جدًا واضح، وأسلوبه في الشرح خلاني أستوعب بسرعة. أنصح أي شخص عنده اهتمام في البرمجة إنه يبدأ بهذي الدورة. تستاهل كل ريال دفعتها." 
  },
  { 
    name: 'علياء حسن', 
    opinion: " كانت فرصة عظيمة ليا. تعلمت فيها حاجات كتير، من أول كتابة الكود لحد ما أنشأت أول موقع لي. كمان المشاريع العملية خلتني أتدرب بشكل مكثف. الدعم الفني كان دايمًا موجود. دي دورة لأي حد عاوز يدخل مجال البرمجة بجد." 
  },
  { 
    name: ' سامي عبد الله جابر', 
    opinion: "الحمد لله اللهم لك الحمد والشكر يعني الواحد بعد ما خلص الدوره تعلم حاجات كثير جدا جدا والباشمهندس مؤمن كان معانا في كل جزئيه كل تفصيله يعني الواحد مش عارف يشكره ازاي على تعبه اللي كان معانا ده والواحد قدر يعمل حاجات ما كانش يتخيل ان يقدر يعملها" 
  },
  { 
    name: 'فهد المطيري', 
    opinion: " الكورس علمتني أساسيات البرمجة وكيف أتعامل مع كل الغات. ما توقعت أقدر أصمم مواقع كامله بنفسي! الحلو إنهم ما يشرحون نظري بس، فيه مشاريع عملية تساعدك تطبق كل اللي تتعلمه. الله يعطيهم العافية ❤❤" 
  },
  { 
    name: 'إبراهيم علي', 
    opinion: " الدورة دي كانت نقلة كبيرة في حياتي. كنت دايمًا بشوف الناس بتبرمج وأقول ده صعب، لكن الباشمهندس شرح كل حاجة بالتفصيل، من الأساسيات لحد ما عملنا مشاريعنا العملية. الحمد لله، أنا هسي عندي موقع شغال بتاعي وبفكر أطور فيهو أكتر." 
  },
  { 
    name: 'أميرة العنزي', 
    opinion: "الكورس كان جدًا مفيد خصوصًا إنني كنت أبدأ من الصفر. تعلمت كيف أستخدم كل شيء  وصرت أعرف أسوي مواقع تفاعلية. أحببت كيف كان فيه دعم فني مستمر، كانوا يردون على أي سؤال بسرعة ويشرحون بكل وضوح." 
  },
  { 
    name: 'ياسر حسن', 
    opinion: "بجد انا مش عارف اقول ايه يعني مش على كميه الحاجات اللي احنا اخذناها في الدوره انا عايز اتكلم على الناس اللي انا عرفتهم في الدوره وتشرفت بيهم المسابقات اللي كانت بتتعمل وحتى الباشمهندس بيكون معانا بعد الدوره عرفنا كل حاجه ما سابش حد الحاجات اللي احنا اخذناها لا تعقل فبجد بجد يعني الف شكر ليك يا باشمهندس وربنا يجازيك الف خير ويجعله في ميزان حسناتك"
  },
  { 
    name: ' محمد دفع الله', 
    opinion: "الدورة دي فتحت لي أبواب جديدة، يا جماعة. كنت بحب التكنولوجيا لكن ما عارف أبدأ من وين. الدورة دي علمتني أساسيات البرمجة وكيفية إنشاء مواقع تفاعلية. الميزة إن الشرح ساهل، وحتى لو عندك سؤال الباشمهندس مؤمن بيكون معاك دائما بيرد عليك ." 
  },
  { 
    name: 'مصطفى عماد', 
    opinion: "  الدورة دي غيرت مفهوم البرمجة بالنسبة لي. كنت فاكر إنك لازم تكون عبقري عشان تتعلم، لكن الباشمهندس عرفنا إن أي حد ممكن يبدأ ويتعلم خطوة بخطوة. الشغل العملي خلاني أتعلم بسرعة وأثق في نفسي." 
  }
];

const certificates = [
  {
    src: "/web  (1).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (2).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (3).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (4).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (5).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (6).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (7).jpeg",
    alt: "شهادة برمجة الويب",
  },
  {
    src: "/web  (8).jpeg",
    alt: "شهادة برمجة الويب",
  }
];
const courses = [
  {
    title: "معالجة الصور الجوية بالدرون",
    description: "تعرف على تقنيات معالجة الصور الملتقطة بالدرون.",
    duration: "8 أسابيع • مبتدئ",
    link: `/dip/${lang}`,
    image: "/drone image processing.png",
    cta: "اعرف المزيد",
  },
  {
    title: "Web GIS",
    description: "الدمج بين برمجه الويب ونظم المعلومات الجغرافيه لعمل خرائط تفاعليه على الويب",
    duration: "30 أسبوع • متقدم",
    link: `webgis/${lang}`,
    image: "/web gis.png",
    cta: "اعرف المزيد",
  },
  {
    title: "GeoAI",
    description: "تعلم دمج الذكاء الاصطناعي مع نظم المعلومات الجغرافية.",
    duration: "2 أسبوع • متقدم",
    link: `/geoai/${lang}`,
    image: "/geoai.png",
    cta: "اعرف المزيد",
  },
  {
    title: "مشاريع نظم المعلومات الجغرافية",
    description: "اكتسب خبرة عملية من خلال مهام مشاريع نظم المعلومات الجغرافية.",
    duration: "4 أسابيع • متوسط",
    link: `/gisprojects/${lang}`,
    image: "/gis projects.png",
    cta: "اعرف المزيد",
  },
  {
    title: "بايثون",
    description: "تعلم أساسيات بايثون لتطوير البيانات والتطبيقات.",
    duration: "8 أسابيع • مبتدئ",
    link: `/python/${lang}`,
    image: "/python.webp",
    cta: "اعرف المزيد",
  },
  {
    title: "الاستشعار عن بعد",
    description: "تعلم تحليل بيانات الاستشعار عن بعد لاكتساب رؤى في نظم المعلومات الجغرافية.",
    duration: "8 أسابيع • مبتدئ",
    link: `/rs/${lang}`,
    image: "/rs.png",
    cta: "اعرف المزيد",
  },
  {
    title: "Flutter",
    description: "قم بإنشاء تطبيقات حديثة للأجهزة المحمولة باستخدام إطار عمل Flutter.",
    duration: "24 أسبوعًا • مبتدئ",
    link: `/flutter/${lang}`,
    image: "/Flutter.png",
    cta: "اعرف المزيد",
  },
];

export default function CoursePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Geo Top Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Header link="/courses/course/webcouse"/> */}
      <FirstSection
        introText="لو عايز تبقى مبرمج ويب محترف انت في المكان الصح"
        introText2="بعد دورة 7 هتبقى قادر تعمل مواقع ويب وتضاعف دخلك في الشهر"
        videoUrl="https://www.youtube.com/embed/OFHnWTzW8Ws"
        consultationText="احجز مكالمتك المجانية"
        consultationLink="https://wa.me/201040950801?text=انا%20مهتم%20بدورة%20برمجة%20الويب%0Aاريد%20حجز%20مكالمة%20هاتفية%0Aاو%20من%20فضلك%20قم%20بتقديم%20لي%20كافة%20التفاصيل"
      />
      <CourseStats Data={Data} dir="rtl" />
      <FaqSection faqData={faqData} dir="rtl" />
      <CustomerReviews testimonials={testimonials} title="آراء المتدربين" dir="rtl" />
      <CertificatesSlider certificates={certificates} title="الشهادات" dir="rtl" />
      <FeaturedCourses courses={courses} dir="rtl" titleSection="الدورات المميزة" />
      {/* <Footer/> */}
    </div>
  );
}
