
import { Service, TeamMember, InterviewStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cybersecurity',
    icon: '🔐',
    title: { UZ: 'Kiberxavfsizlik', RU: 'Кибербезопасность', EN: 'Cybersecurity' },
    description: { 
      UZ: 'Tizimlaringizni eng murakkab hujumlardan himoya qilamiz.', 
      RU: 'Защищаем ваши системы от самых сложных атак.', 
      EN: 'Protecting your systems from the most complex attacks.' 
    },
    details: {
      UZ: 'Bizning kiberxavfsizlik mutaxassislarimiz tashkilotingizning raqamli infratuzilmasini audit qiladi, zaifliklarni aniqlaydi va 24/7 monitoring tizimlarini joriy etadi.',
      RU: 'Наши эксперты по кибербезопасности проводят аудит цифровой инфраструктуры вашей организации, выявляют уязвимости и внедряют системы мониторинга 24/7.',
      EN: 'Our cybersecurity experts audit your organization\'s digital infrastructure, identify vulnerabilities, and implement 24/7 monitoring systems.'
    }
  },
  {
    id: 'mobile-apps',
    icon: '📱',
    title: { UZ: 'Android ilovalari', RU: 'Android приложения', EN: 'Android Apps' },
    description: { 
      UZ: 'Yuqori unumdorlikka ega zamonaviy mobil ilovalar.', 
      RU: 'Современные высокопроизводительные мобильные приложения.', 
      EN: 'Modern high-performance mobile applications.' 
    },
    details: {
      UZ: 'Kraken Tech eng so\'nggi Android SDK va frameworklaridan foydalangan holda, mijozlar ehtiyojiga moslashtirilgan, tezkor va xavfsiz ilovalarni ishlab chiqadi.',
      RU: 'Kraken Tech разрабатывает быстрые и безопасные приложения, адаптированные под нужды клиентов, используя последние Android SDK и фреймворки.',
      EN: 'Kraken Tech develops fast and secure apps tailored to client needs using the latest Android SDK and frameworks.'
    }
  },
  {
    id: 'web-dev',
    icon: '🌐',
    title: { UZ: 'Saytlar yaratish', RU: 'Создание сайтов', EN: 'Web Development' },
    description: { 
      UZ: 'Murakkab korporativ va e-commerce veb-yechimlar.', 
      RU: 'Сложные корпоративные и e-commerce веб-решения.', 
      EN: 'Complex corporate and e-commerce web solutions.' 
    },
    details: {
      UZ: 'Biz nafaqat chiroyli, balki yuqori yuklamalarga chidamli veb-platformalar yaratamiz. SEO optimizatsiyasi va kiberxavfsizlik bizning ustuvorligimizdir.',
      RU: 'Мы создаем не только красивые, но и устойчивые к высоким нагрузкам веб-платформы. SEO оптимизация и кибербезопасность — наши приоритеты.',
      EN: 'We create not just beautiful, but high-load resilient web platforms. SEO optimization and cybersecurity are our priorities.'
    }
  },
  {
    id: 'robotics',
    icon: '🤖',
    title: { UZ: 'Robotlar va avtomatlashtirish', RU: 'Роботы и автоматизация', EN: 'Robotics & Automation' },
    description: { 
      UZ: 'Sanoat va biznes jarayonlarini robotlashtirish.', 
      RU: 'Роботизация промышленных и бизнес-процессов.', 
      EN: 'Robotization of industrial and business processes.' 
    },
    details: {
      UZ: 'Kraken Tech Industries sanoat korxonalari uchun maxsus robotlashtirilgan tizimlar va dasturiy ta\'minotlarni yetkazib beradi.',
      RU: 'Kraken Tech Industries поставляет специализированные роботизированные системы и программное обеспечение для промышленных предприятий.',
      EN: 'Kraken Tech Industries supplies specialized robotic systems and software for industrial enterprises.'
    }
  },
  {
    id: 'custom-projects',
    icon: '🛠',
    title: { UZ: 'Individual loyihalar', RU: 'Индивидуальные проекты', EN: 'Custom Projects' },
    description: { 
      UZ: 'Mijoz talablari asosida maxsus koding va muhandislik.', 
      RU: 'Спецкодинг и инженерия на основе требований заказчика.', 
      EN: 'Special coding and engineering based on client requirements.' 
    },
    details: {
      UZ: 'Sizda g\'oya bormi? Biz uni haqiqatga aylantiramiz. Eng murakkab muammolar uchun individual raqamli yechimlar.',
      RU: 'У вас есть идея? Мы воплотим ее в жизнь. Индивидуальные цифровые решения для самых сложных проблем.',
      EN: 'Have an idea? We bring it to life. Individual digital solutions for the most complex problems.'
    }
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Alisher Krakenov', role: { UZ: 'Asoschi & CEO', RU: 'Основатель и CEO', EN: 'Founder & CEO' }, image: 'https://odam.uz/upload/media/entries/2017-05/17/547-1-6997913e765547f69f6d5bdef2a5ed53.jpg' },
  { id: '2', name: 'Cyber Anna', role: { UZ: 'CTO / Team Lead', RU: 'CTO / Team Lead', EN: 'CTO / Team Lead' }, image: 'https://iv.kommersant.ru/Issues.photo/REGIONS/PERM_Online/2022/02/22/KNO_005166_00017_1_t219_155140.jpg' },
  { id: '3', name: 'Neon Mike', role: { UZ: 'Senior Robot Engineer', RU: 'Senior Robot Engineer', EN: 'Senior Robot Engineer' }, image: 'https://picsum.photos/seed/dev/200/200' },
];

export const INTERVIEW_STEPS: InterviewStep[] = [
  { id: 1, title: { UZ: 'Texnik test', RU: 'Технический тест', EN: 'Technical Test' }, description: { UZ: 'Onlayn platformamizda fundamental bilimlar testi.', RU: 'Тест фундаментальных знаний на нашей онлайн-платформе.', EN: 'Fundamental knowledge test on our online platform.' } },
  { id: 2, title: { UZ: 'Amaliy topshiriq', RU: 'Практическое задание', EN: 'Practical Task' }, description: { UZ: 'Real loyihalarga yaqin bo\'lgan topshiriqni 48 soat ichida bajarish.', RU: 'Выполнение задания, близкого к реальным проектам, в течение 48 часов.', EN: 'Complete a task close to real projects within 48 hours.' } },
  { id: 3, title: { UZ: 'Team lead bilan suhbat', RU: 'Собеседование с Team Lead', EN: 'Interview with Team Lead' }, description: { UZ: 'Texnik ko\'nikmalar va "code review" muhokamasi.', RU: 'Обсуждение технических навыков и "code review".', EN: 'Discussion of technical skills and code review.' } },
  { id: 4, title: { UZ: 'Asoschi bilan suhbat', RU: 'Интервью с Основателем', EN: 'Final Interview' }, description: { UZ: 'Madaniy moslik va kelajakdagi maqsadlar haqida.', RU: 'О культурном соответствии и будущих целях.', EN: 'About cultural fit and future goals.' } },
];
