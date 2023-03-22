import { I18nManager } from 'react-native';
import { displayName as appName } from '../../app.json';

module.exports = {
  SCREEN_TITLE: {
    loginScreenTitle: 'Login',
  },
  STRING: {
    appName: appName,
    arabic: I18nManager.isRTL ? 'عربى' : 'English',
    //Details Screen

    //Order Screen
    loading: I18nManager.isRTL ? 'تحميل' : 'Loading',
    or: I18nManager.isRTL ? 'أو' : 'OR',
    yes: I18nManager.isRTL ? 'نعم' : 'Yes',
    login: I18nManager.isRTL ? 'تسجيل الدخول' : 'Login',
    Sign: I18nManager.isRTL ? 'تسجيل الدخول' : 'Sign In',
    mail: I18nManager.isRTL ? 'عنوان البريد الإلكتروني' : 'E-mail Address',
    phonesignin: I18nManager.isRTL
      ? 'تسجيل الدخول باستخدام رقم الهاتف'
      : 'Sign-in using Phone number',
    promocode: I18nManager.isRTL ? 'رمز الارويج' : 'Promo Code',
    //login screen
    Welcome: I18nManager.isRTL ? '' : 'Welcome',
    HelloAgain: I18nManager.isRTL ? 'مرحباً بكم مجدداً' : 'Hello Again!',
    backa: I18nManager.isRTL ? '' : 'Back',
    skipfor: I18nManager.isRTL ? 'سجل لاحقاً' : 'Skip for now',
    signin: I18nManager.isRTL ? 'تسجيل الدخول' : 'Sign In',
    phonenumber: I18nManager.isRTL ? 'رقم الهاتف' : 'Phone Number',
    phonenumbers: I18nManager.isRTL ? '8628 5256 1783' : '8628 5256 1783',
    semail: I18nManager.isRTL
      ? 'تسجيل الدخول باستخدام البريد الإلكتروني'
      : 'Sign In Using Email',
    sNew: I18nManager.isRTL ? 'هل انت مستخدم جديد؟' : 'New User?',
    sUser: I18nManager.isRTL ? 'اشترك الآن' : 'Sign Up',

    //otp screen
    VerifyY: I18nManager.isRTL ? 'أكد التسجيل و ابدأ بالتسوق' : 'Verify Your',
    Accounta: I18nManager.isRTL ? 'Account &' : 'Account &',
    starts: I18nManager.isRTL ? 'Start Shopping' : 'Start Shopping',
    enterC: I18nManager.isRTL ? 'ادخل الرمز' : 'Enter Code',
    resendC: I18nManager.isRTL ? 'أعادة إرسال الرمز' : 'Resend Code',
    expires: I18nManager.isRTL ? 'ينتهي في' : 'Expires In',
    VerifyDes: I18nManager.isRTL
      ? 'م إرسال رمز التحقق إلى الرقم'
      : 'Verification Code has been sent to ',
    verifyText: I18nManager.isRTL ? 'ارسال' : 'Verify',
    verifyAccount: I18nManager.isRTL ? 'تأكيد التسجيل' : 'Verify Your Account',
    account: I18nManager.isRTL
      ? 'أكد التسجيل حسابك عن طريق إدخال الرمز'
      : ' Verify Your Account by entering the code.',

    //signup screen
    signup: I18nManager.isRTL ? 'اشترك الآن' : 'Sign Up',
    hellos: I18nManager.isRTL ? 'مرحبا أشترك الآن' : 'Hello !',
    signut: I18nManager.isRTL ? 'Signup to' : 'Signup to',
    getstar: I18nManager.isRTL ? 'البدء' : 'Get Started',
    readand: I18nManager.isRTL
      ? 'أنا اوفق على'
      : 'I have read and accepted the',
    termsand: I18nManager.isRTL ? 'الأحكام والشروط' : 'Terms and Conditions',
    alreadyhav: I18nManager.isRTL
      ? 'هل لديك حساب؟'
      : 'Already have an account?',
    firstname: I18nManager.isRTL ? 'الاسم الأول' : 'First Name',
    middlename: I18nManager.isRTL ? 'الاسم الثاني' : 'Middle Name',
    lastname: I18nManager.isRTL ? 'الأسم الثالث' : 'Last Name',
    emailaddress: I18nManager.isRTL
      ? 'عنوان البريد الإلكتروني'
      : 'Email Address',
    anwar: I18nManager.isRTL ? 'Anwar' : 'Anwar',
    imran: I18nManager.isRTL ? 'Imran' : 'Imran',
    ali: I18nManager.isRTL ? 'Ali' : 'Ali',
    mailid: I18nManager.isRTL ? 'anwar132@gmail.com' : 'anwar132@gmail.com',
    Choose: I18nManager.isRTL ? 'اختر لغتك' : 'Choose your Language',
    help: I18nManager.isRTL ? 'نحن هنا للمساعدة' : 'We are here to help',
    subject: I18nManager.isRTL ? 'الموضوع' : 'Subject',
    wishlist: I18nManager.isRTL ? 'قائمة الرغبات' : 'My Wishlist',
    details: I18nManager.isRTL ? 'تفاصيل' : 'Details',
    movewish: I18nManager.isRTL
      ? 'هل أنت متأكد من نقل هذا العنصر إلى قائمة الرغبات؟'
      : 'Are you sure to move this item to Wishlist?',
    removewish: I18nManager.isRTL
      ? 'هل أنت متأكد من إزالة هذا العنصر من قائمة الرغبات؟'
      : 'Are you sure to remove this item from Wishlist?',

    //faq
    faqs: I18nManager.isRTL ? 'الأسئلة الاكثر شيوعاً' : 'FAQs',

    //privacy
    privacy: I18nManager.isRTL ? 'سياسة الخصوصية' : 'Privacy Policy ',
    //terms
    Terms: I18nManager.isRTL ? 'الأحكام والشروط' : 'Terms and Conditions ',

    //rating
    and: I18nManager.isRTL ? '& فما فوق ' : '& above',
    nodata: I18nManager.isRTL ? 'لاتوجد بيانات' : 'No data found',
    loginRequired: I18nManager.isRTL ? 'تسجيل الدخول مطلوب' : 'Login required',
    loginToAddToCart: I18nManager.isRTL
      ? 'الرجاء تسجيل الدخول لاستكمال الطلب!'
      : 'Please login to confirm your order!',
    loginToAddToWishList: I18nManager.isRTL
      ? 'الرجاء تسجيل الدخول لإضافة منتجات إلى قائمة الرغبات'
      : 'Please login to add products to wishlist',
    fileType: I18nManager.isRTL ? 'نوع الملف' : 'File type',
    image: I18nManager.isRTL ? 'اختر صورة' : 'Select Image',
    pdf: I18nManager.isRTL ? 'حدد Pdf' : 'Select Pdf',
    selectf: I18nManager.isRTL ? 'اختر الملف' : 'Select file',
    camera: I18nManager.isRTL ? 'افتح الكاميرا' : 'Open Camera',
    fileSizeExceede: I18nManager.isRTL
      ? 'تم تجاوز حجم الملف'
      : 'File size exceeded',
    selectSpec: I18nManager.isRTL ? 'اختر الخصائص' : 'Select specification',

    //Address
    office: I18nManager.isRTL ? 'مكتب' : 'Office',
    home: I18nManager.isRTL ? 'منزل' : 'Home',
    others: I18nManager.isRTL ? 'آخر' : 'Others',
    selectdate: I18nManager.isRTL ? 'أختر التاريخ' : 'Select Date',
  },
  SELECT_LANGUAGE: {
    Choose: I18nManager.isRTL ? 'اختر لغتك' : 'Choose your language',
    En: I18nManager.isRTL ? 'English' : 'English',
    AR: I18nManager.isRTL ? 'عربى' : 'عربى',
    selectL: I18nManager.isRTL ? 'اختر اللغة' : 'Select Language',
  },
  APP_INTRO: {
    KishkWel: I18nManager.isRTL ? 'مرحبا بكم في كشك' : 'Welcome to KISHK',
  },

  OTP: {
    expires: I18nManager.isRTL ? 'ينتهي في' : 'Expires In',
  },
  APP_SLIDER: {
    Title: I18nManager.isRTL ? 'Effortless Payments!' : 'Effortless Payments!',
    Content: I18nManager.isRTL
      ? 'Lorem ipsum dolor sit amet, consectetur adispiscing elutwe sed '
      : 'Lorem ipsum dolor sit amet, consectetur adispiscing elutwe sed ',
  },

  Login: {
    Heading: I18nManager.isRTL ? 'تسجيل الرخول' : 'Login',
  },
  //Header component
  HEADER: {
    search: I18nManager.isRTL
      ? 'البحث عن طريق المنتجات أو الفئة'
      : 'Search by products and category',
  },
  //Home container
  HOME: {
    recommend: I18nManager.isRTL ? 'منتجات لك' : 'Recommended for you',
    seeall: I18nManager.isRTL ? 'اظهار الكل' : 'See all',
    electronics: I18nManager.isRTL ? 'الإلكترونيات' : 'Top Electronics',
    home: I18nManager.isRTL
      ? 'Home and kitchen deals'
      : 'Home and Kitchen deals',
    women: I18nManager.isRTL ? 'Womens Fashions' : 'Womens Fashions',
    trend: I18nManager.isRTL ? 'Trending Fashions' : 'Trending Fashions',
    category: I18nManager.isRTL ? 'فئات مميزة' : 'Featured Categories',
    top: I18nManager.isRTL ? 'الماركات' : 'Top Brands',
    satellite: I18nManager.isRTL ? 'قمر صناعي' : 'Satellite',
    mapView: I18nManager.isRTL ? 'خريطة اعرض' : 'Map view',
    search: I18nManager.isRTL ? 'بحث' : 'Search',
  },
  //ProductDetailScreen container

  PRODUCT: {
    rejected: I18nManager.isRTL ? 'تم التوصيل' : 'Rejected',
    refundInitiated: I18nManager.isRTL ? 'بدأ رد الأموال' : 'Refund initiated',
    refundCompleted: I18nManager.isRTL
      ? 'اكتمل رد الأموال'
      : 'Refund completed',
    name: I18nManager.isRTL ? 'Samsung' : 'Samsung',
    color: I18nManager.isRTL ? 'Color' : 'Color',
    strap: I18nManager.isRTL ? 'Strap Type' : 'Strap Type',
    metal: I18nManager.isRTL ? 'Metal' : 'Metal',
    fiber: I18nManager.isRTL ? 'Fiber' : 'Fiber',
    leather: I18nManager.isRTL ? 'Leather' : 'Leather',
    charge: I18nManager.isRTL ? 'رسوم التوصيل' : 'Delivery Charge',
    date: I18nManager.isRTL ? 'تاريخ التوصيل المتوقع' : 'Estimated Delivery by',
    sars: I18nManager.isRTL ? '{100} د.ب ' : 'BHD',
    march: I18nManager.isRTL ? '13 March 2021' : '13 March 2021',
    details: I18nManager.isRTL ? 'تفاصيل المنتج' : 'Product Details',
    spec: I18nManager.isRTL ? 'خصائص المنتج' : 'Specification',
    des: I18nManager.isRTL ? 'وصف المنتج' : 'Description',
    mod: I18nManager.isRTL ? 'Model Number' : 'Model Number',
    num: I18nManager.isRTL ? 'SAM56Y536737' : 'SAM56Y536737',
    dial: I18nManager.isRTL ? 'Dial Shape' : 'Dial Shape',
    circle: I18nManager.isRTL ? 'Circle' : 'Circle',
    blue: I18nManager.isRTL ? 'Blue' : 'Blue',
    other: I18nManager.isRTL ? 'Other Info' : 'Other Info',
    review: I18nManager.isRTL ? 'المراجعات' : 'Reviews',
    reviews: I18nManager.isRTL ? 'المراجعات' : 'Reviews',
    view: I18nManager.isRTL ? 'عرض المزيد' : 'View more',
    similar: I18nManager.isRTL ? 'منتجات مشابهة' : 'Similar Items',
    addCart: I18nManager.isRTL ? 'أضف إلى السلة' : 'Add to Cart',
    cus: I18nManager.isRTL ? 'مصممة حسب الطلب' : 'Custom',
    sar: I18nManager.isRTL ? 'د.ب' : 'BHD ',
    hundred: I18nManager.isRTL ? '100.00 ' : '100.00 ',
    onethirty: I18nManager.isRTL ? 'د.ب 130.00' : 'BHD 130.00',
    amt: I18nManager.isRTL ? '230.00' : '230.00',
    hun: I18nManager.isRTL ? 'د.ب 100.00' : 'BHD 100.00',
    recent: I18nManager.isRTL ? 'منتجات شوهدت مؤخراً' : 'Recently viewed items',
    sampletext: I18nManager.isRTL
      ? 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using aking it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text'
      : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    text: I18nManager.isRTL
      ? 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
      : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    title: I18nManager.isRTL
      ? 'Sporty Classic 1302 Stainless Steel Analog Mens watch'
      : 'Sporty Classic 1302 Stainless Steel Analog Mens watch',
  },
  FOOTER: {
    home: I18nManager.isRTL ? 'الرئيسية' : 'Home',
    category: I18nManager.isRTL ? 'الفئات' : 'Category',
    cart: I18nManager.isRTL ? 'عربة التسوق' : 'Cart',
    deals: I18nManager.isRTL ? 'صفقات' : 'Deals',
    profile: I18nManager.isRTL ? 'الملف الشخصي' : 'Profile',
  },
  //DealsScreen
  DEALS: {
    electronics: I18nManager.isRTL
      ? 'Top deals in Electronics'
      : 'Top deals in electronics',
    men: I18nManager.isRTL ? 'Top deals Mens wear' : 'Top deals in Mens wear',
  },

  DELIVERY_DATE: {
    confirm: I18nManager.isRTL
      ? 'تأكيد تاريخ ووقت الاستلام'
      : 'Confirm Delivery Date and Time',
    select: I18nManager.isRTL
      ? 'حدد تاريخ ووقت الاستلام'
      : 'Select Delivery Date and Time',
    mon: I18nManager.isRTL ? 'الاثنين' : 'Mon',
    tue: I18nManager.isRTL ? 'الثلاثاء' : 'Tue',
    wed: I18nManager.isRTL ? 'الأربعاء' : 'Wed',
    thu: I18nManager.isRTL ? 'الخميس' : 'Thr',
    fri: I18nManager.isRTL ? 'الجمعة' : 'Fri',
    sat: I18nManager.isRTL ? 'السبت' : 'Sat',
    sun: I18nManager.isRTL ? 'الأحد' : 'Sun',
  },
  //CategoryScreen
  CATEGORY: {
    recommendation: I18nManager.isRTL ? 'Recommendation' : 'Recommendation',
    products: I18nManager.isRTL ? 'مشاهدة جميع المنتجات' : 'See all products',
    electronics: I18nManager.isRTL ? 'Electronics' : 'Electronics',
    home: I18nManager.isRTL ? 'Home Appliances' : 'Home Appliances',
    men: I18nManager.isRTL ? 'Mens Fashions' : 'Mens Fashions',
    women: I18nManager.isRTL ? 'Womens Fashions' : 'Womens Fashions',
    watch: I18nManager.isRTL ? 'Watches' : 'Watches',
    beauty: I18nManager.isRTL ? 'Beauty Care' : 'Beauty Care',
    kids: I18nManager.isRTL ? 'Kids Store' : 'Kids Store',
    grocery: I18nManager.isRTL ? 'Grocery' : 'Grocery',
    brands: I18nManager.isRTL ? 'العلامات التجارية' : 'Brands',
  },
  //SearchDetailScreen,SearchScreen
  SEARCH: {
    result: I18nManager.isRTL ? 'نتائج البحث' : 'Search Results',
    item: I18nManager.isRTL ? 'المنتجات' : 'Items',
    filter: I18nManager.isRTL ? 'فرز' : 'Filter',
    sort: I18nManager.isRTL ? 'ترتيب' : 'Sort',
    categories: I18nManager.isRTL ? 'فئات' : 'Categories',
  },
  //FilterScreen
  FILTER: {
    your: I18nManager.isRTL ? 'نتائج البحث' : 'Your Results',
    result: I18nManager.isRTL ? 'النتائج' : 'Results',
    category: I18nManager.isRTL ? 'Category' : 'Category',
    smart: I18nManager.isRTL ? 'Smart Phones' : 'Smart Phones',
    clear: I18nManager.isRTL ? 'تصفية' : 'Clear',
    results: I18nManager.isRTL ? 'النتائج' : 'Results',
    apply: I18nManager.isRTL ? 'نأكيد' : 'Apply',
    filter: I18nManager.isRTL ? 'فرز' : 'Filter',
    brands: I18nManager.isRTL ? 'العلامات التجارية' : 'Brands',
    search: I18nManager.isRTL ? 'البحث عن المنتجات' : 'Search products ',
    edit: I18nManager.isRTL ? 'تعديل الملف الشخصي' : 'Edit profile',
    checkout1: I18nManager.isRTL ? 'انهاء الشراء 1/3' : 'Checkout 1/3',
    checkout2: I18nManager.isRTL ? 'انهاء الشراء 2/3' : 'Checkout 2/3',
    checkout3: I18nManager.isRTL ? 'انهاء الشراء 3/3' : 'Checkout 3/3',
  },
  //CategoryFilterScreen
  CATEGORYFILTER: {
    category: I18nManager.isRTL ? 'Category' : 'Category',
    electronics: I18nManager.isRTL
      ? 'Electronics and Mobiles >> Mobile Phones'
      : 'Electronics and Mobiles >> Mobile Phones',
  },
  CART: {
    startshop: I18nManager.isRTL ? 'البدأ بالتسوق' : 'Start Shopping',
    addfew: I18nManager.isRTL ? 'الرجاء اضافة منتجات' : 'please add few items',
    empty: I18nManager.isRTL ? 'سلة المشتريات فارغة' : 'Your cart is empty.',
    remove: I18nManager.isRTL ? 'إزالة' : 'Remove',
    addto: I18nManager.isRTL ? 'أضافة إلى السلة' : 'Add To Cart',
    moveto: I18nManager.isRTL ? 'ارسال إلى قائمة الرغبات' : 'Move To Wishlist',
    mycarr: I18nManager.isRTL ? 'سلة التسوق' : 'My Cart',
    edit: I18nManager.isRTL ? 'تعديل' : 'Edit',
    reset: I18nManager.isRTL ? 'إعادة ادخال البيانات' : 'Reset',
    submit: I18nManager.isRTL ? 'إرسال' : 'Submit',
    shoulder: I18nManager.isRTL ? 'حجم الكتف (سم)' : 'Shoulder Size (Cm)',
    chest: I18nManager.isRTL ? 'طول الصدر (سم)' : 'Chest Length (Cm)',
    neck: I18nManager.isRTL ? 'حجم العنق (سم)' : 'Neck Size (Cm)',
    length: I18nManager.isRTL ? 'الطول (سم)' : 'Length (Cm)',
    enterdetails: I18nManager.isRTL ? 'أدخل التفاصيل' : 'Enter Details',
    howto: I18nManager.isRTL ? 'كيفية القياس' : 'How to Measure',
    items: I18nManager.isRTL ? 'عدد المنتجات' : '2 Items',
    confirmorder: I18nManager.isRTL ? 'تأكيد الطلب' : 'Confirm Order',
    incart: I18nManager.isRTL ? 'منتج في سلة التسوق' : 'Item in cart',
    incart_s: I18nManager.isRTL ? 'منتج في سلة التسوق' : 'Items in cart',
    addfrom: I18nManager.isRTL ? 'أضف من قائمة رغباتك' : 'Add from Wishlist',
    addpromo: I18nManager.isRTL ? 'رمز الارويج' : 'Add Promo Code',
    enterpromo: I18nManager.isRTL
      ? 'ادخل الرمز الترويجي'
      : 'Enter your Promo Code',
    apply: I18nManager.isRTL ? 'نأكيد' : 'APPLY',
    subtotal: I18nManager.isRTL ? 'المجموع قبل رسوم الخدمة' : 'Subtotal',
    deliveryCh: I18nManager.isRTL ? 'رسوم التوصيل' : 'Delivery Charge',
    serviceCh: I18nManager.isRTL ? 'تكلفة الخدمة' : 'Service Charge',
    total: I18nManager.isRTL ? 'المجموع' : 'Total',
    vat: I18nManager.isRTL ? 'ضريبة القيمة المضافة' : 'VAT',
    move: I18nManager.isRTL ? 'ارسال إلى قائمة الرغبات' : 'Move to WishList',
    item: I18nManager.isRTL ? 'عدد المنتجات' : 'Item',
    items: I18nManager.isRTL ? 'المنتجات' : 'Items',
    price: I18nManager.isRTL ? 'د.ب' : 'BHD',
    coupon: I18nManager.isRTL
      ? 'تم تطبيق الرمز بنجاح ، ستوفر (10) دينار بحريني'
      : 'Coupon Applied Successfully, You save',
    remove: I18nManager.isRTL ? 'إزالة' : 'Remove',
    inclusive: I18nManager.isRTL
      ? 'شامل ضريبة القيمة المضافة والرسوم'
      : 'inclusive of VAT and charges',
    wishlist: I18nManager.isRTL ? 'قائمة الرغبات' : 'Wishlist',
    electronics: I18nManager.isRTL
      ? 'Electronics and Mobilephones>>Mobile phones'
      : 'Electronics and Mobilephones>>Mobile phones',
    cod_fee: I18nManager.isRTL ? 'الدفع عند الاستلام' : 'Cod Fee',
  },
  //SortModal
  SORT: {
    Heading: I18nManager.isRTL ? 'ترتيب حسب' : 'Sort By',
  },
  CHAT: {
    Type: I18nManager.isRTL ? 'الرد على المسؤول' : 'Reply to admin',
    Send: I18nManager.isRTL ? 'سال' : 'SEND',
    placeholder: I18nManager.isRTL ? 'اكتب شيئا' : 'Type something',
  },
  PROFILE: {
    Head: I18nManager.isRTL ? 'حسابي' : 'My Account',
    MyAccount: I18nManager.isRTL ? 'حسابي' : 'My Account',
    MyOrders: I18nManager.isRTL ? 'طلباتي' : 'My Orders',
    Mywishlist: I18nManager.isRTL ? 'قائمة الرغبات' : 'My Wishlist',
    Address: I18nManager.isRTL ? 'العناوين' : 'Address',
    Settings: I18nManager.isRTL ? 'الإعدادات والدعم' : 'Settings & Support',
    Change: I18nManager.isRTL ? 'تغيير اللغة' : 'Change language',
    Support: I18nManager.isRTL ? 'الدعم' : 'Support',
    FAQ: I18nManager.isRTL ? 'الأسئلة الاكثر شيوعاً' : 'FAQs',
    Privacy: I18nManager.isRTL ? 'سياسة الخصوصية' : 'Privacy Policy',
    Terms: I18nManager.isRTL ? 'الأحكام والشروط' : 'Terms And Conditions',
    About: I18nManager.isRTL ? 'عن كشك' : 'About Us',
    Addaddress: I18nManager.isRTL ? 'أضافة عنوان جديد' : 'Add New Address',
    Edit: I18nManager.isRTL ? 'تعديل العنوان' : 'Edit Address',
    profilemsg: I18nManager.isRTL
      ? '	تم تحديث الملف الشخصي بنجاح'
      : 'Profile updated successfully',
  },
  ADDRESS: {
    Delivery: I18nManager.isRTL ? 'عنوان التوصيل' : 'Delivery Address',
    Billing: I18nManager.isRTL ? 'عنوان وصول الفواتير' : 'Billing Address',
    Addnew: I18nManager.isRTL ? 'أضافة عنوان جديد' : 'Add New Address',
    Contactdetails: I18nManager.isRTL ? 'بيانات الاتصال' : 'Contact details',
    Name: I18nManager.isRTL ? 'الاسم' : 'Name',
    AddressInfo: I18nManager.isRTL ? 'معلومات العنوان' : 'Address Info',
    Apartment: I18nManager.isRTL ? 'شقة' : 'House no / Floor no',
    POBox: I18nManager.isRTL ? 'صندوق بريد' : 'Block Number',
    Landmark: I18nManager.isRTL ? 'معلم معروف' : 'Landmark',
    Region: I18nManager.isRTL ? 'منطقة' : 'Region',
    Street: I18nManager.isRTL ? 'الطريق' : 'Street',
    deleteaddress: I18nManager.isRTL ? 'حذف العنوان' : 'Delete Address',
    deleteaddressMessage: I18nManager.isRTL ? 'هل أنت متأكد أنك تريد ان تحذف العنوان' : 'Are you sure you want to delete this address?',
    ok: I18nManager.isRTL ? 'تأكيد' : 'OK',
    Chooselocation: I18nManager.isRTL
      ? 'اختر الموقع من الخريطة'
      : 'Choose location from the map',
    MapModelHeader: I18nManager.isRTL ? 'اختر الموقع' : 'Choose Your Location',
    setLocation: I18nManager.isRTL ? 'حدد الموقع' : 'Set Location',
    default: I18nManager.isRTL ? 'الأساسي' : 'default',
  },
  EDIT: {
    editPro: I18nManager.isRTL ? 'تعديل الملف الشخصي' : 'Edit profile',
    name: I18nManager.isRTL ? 'الاسم' : 'Name',
    logout: I18nManager.isRTL ? 'تسجيل الخروج' : 'Logout',
    phone: I18nManager.isRTL ? 'رقم الهاتف' : 'Phone Number',
    email: I18nManager.isRTL ? 'عنوان البريد الإلكتروني' : 'Email Address',
    birth: I18nManager.isRTL ? 'تاريخ الميلاد' : 'Date of Birth',
    male: I18nManager.isRTL ? 'ذكر' : 'Male',
    female: I18nManager.isRTL ? 'أنثى' : 'Female',
    save: I18nManager.isRTL ? 'حفظ' : 'Save',
    default: I18nManager.isRTL ? 'الأساسي' : 'Default',
    crop: I18nManager.isRTL ? 'تعديل الصورة' : 'Crop',
  },
  //LogoutModal
  LOGOUT: {
    sure: I18nManager.isRTL
      ? 'هل أنت متأكد أنك تريد تسجيل الخروج؟'
      : 'Are you sure you want to log out?',
    cancel: I18nManager.isRTL ? 'إلغاء' : 'Cancel',
    logout: I18nManager.isRTL ? 'تسجيل الخروج' : 'Logout',
    yes: I18nManager.isRTL ? 'نعم' : 'Yes',
  },
  CHECKOUT: {
    paymethod: I18nManager.isRTL
      ? 'اختار طريقة الدفع'
      : 'Select payment method',
    offline: I18nManager.isRTL ? 'اوفلاين' : 'Offline',
    onlineCard: I18nManager.isRTL ? 'متاح' : 'ONLINE',
    cod: I18nManager.isRTL ? 'اتمام الطلب' : 'COD',
    offlinecaps: I18nManager.isRTL ? 'اوفلاين' : 'OFFLINE',
    cash: I18nManager.isRTL ? 'الدفع عند الاستلام' : 'Cash on Delivery',
    cashco: I18nManager.isRTL
      ? 'الدفع عند الاستلام (COD)'
      : 'Cash on Delivery(COD)',
    cardno: I18nManager.isRTL ? 'Card Number' : 'Card Number',
    expire: I18nManager.isRTL ? 'Expire Date' : 'Expire Date',
    cvv: I18nManager.isRTL ? 'Cvv' : 'Cvv',
    name: I18nManager.isRTL ? 'Cardholder Name' : 'Cardholder Name',
    pay: I18nManager.isRTL ? 'طريقة الدفع' : 'Payment Method',
    id: I18nManager.isRTL ? 'KIS-1001' : 'KIS-1001',
    thanks: I18nManager.isRTL ? 'شكراً لطلبك' : 'Thankyou for your order!',
    order: I18nManager.isRTL
      ? '	تم إرسال الطلب إلى عنوان بريدك الإلكتروني. يمكنك تتبع طلبك باستخدام رقم الطلب {{id}}'
      : 'Order email has been send to your email address. You can track your order using order ID {{id}}',
    date: I18nManager.isRTL ? 'تاريخ التوصيل' : 'Delivery Date',
    feb: I18nManager.isRTL
      ? '02 Feb 2021,10AM to 12PM'
      : '02 Feb 2021,10AM to 12PM',

    online: I18nManager.isRTL ? 'الدفع الالكتروني' : 'Online Payment',
    continue: I18nManager.isRTL ? 'مواصلة التسوق' : 'Continue Shopping',
    view: I18nManager.isRTL ? 'مشاهدة الطلب' : 'View order',
    summary: I18nManager.isRTL ? 'تفاصيل الطلب' : 'Summary',
    payment: I18nManager.isRTL ? 'طريقة الدفع' : 'Payments',
    status: I18nManager.isRTL ? 'حالة الطلب' : 'Status',
    success: I18nManager.isRTL ? 'تم الدفع بنجاح' : 'Success',
    now: I18nManager.isRTL ? 'ادفع الآن' : 'Pay Now',
    placeOrder: I18nManager.isRTL ? 'اتمام الطلب' : 'Place Order',
    checkout_one_button: I18nManager.isRTL
      ? 'انتقال الى صفحة الدفع'
      : 'Proceed to payment',
    expected_delivery: I18nManager.isRTL
      ? 'تاريخ التوصيل المتوقع'
      : 'Expected Delivery by',
    add_new_address: I18nManager.isRTL ? 'أضف عنوان' : 'Add New Address',
    address_details: I18nManager.isRTL ? 'العنوان' : 'Address Details',
  },
  //OrderDetailsScreen
  ORDER: {
    order: I18nManager.isRTL ? 'حالة الطلب' : 'Order Status',
    receive: I18nManager.isRTL ? 'تاريخ تأكيد الطلب' : 'Order received',
    under: I18nManager.isRTL ? 'الطلب قيد الإعداد' : 'Order under preparation',
    ready: I18nManager.isRTL ? 'في طور التوصيل' : 'Ready for delivery',
    cancelled: I18nManager.isRTL ? 'ملغي' : 'Cancelled',
    feb: I18nManager.isRTL ? '02 Feb 2021' : '02 Feb 2021',
    delivered: I18nManager.isRTL ? 'تاريخ الطلب' : 'Order History',
    order_delivered: I18nManager.isRTL ? 'تم التوصيل' : 'Order delivered',
    expect: I18nManager.isRTL ? 'تاريخ التوصيل المتوقع' : 'Expected Delivery  ',
    summary: I18nManager.isRTL ? 'ملخص الطلب' : 'Order Summary',
    support: I18nManager.isRTL ? 'الدعم' : 'Support',
    cancel: I18nManager.isRTL ? 'الغاء الطلب' : 'Cancel Order',
    Servicequality: I18nManager.isRTL ? 'جودة الخدمة' : 'Service quality',
    Ontimedelivery: I18nManager.isRTL ? 'التسليم في الوقت' : 'On time delivery',
    Foodquality: I18nManager.isRTL ? 'جودة الطعام' : 'Food quality',
    Rateorder: I18nManager.isRTL ? 'تقييم الطلب' : 'Rate Order',
    Rateitem: I18nManager.isRTL ? 'قيم المنتج' : 'Rate Item',
    Message: I18nManager.isRTL ? 'تفاصيل الإلغاء' : 'Message',
    Price: I18nManager.isRTL ? 'السعر' : 'Price',
    details: I18nManager.isRTL ? 'تفاصيل الطلب' : 'Order Details',
    custom: I18nManager.isRTL ? 'مصممة حسب الطلب' : 'Custom',
    into: I18nManager.isRTL ? ' x2 ' : ' x2',
    person: I18nManager.isRTL ? 'عامل التوصيل' : 'Delivery Person',
    now: I18nManager.isRTL ? 'اتصل الآن' : 'Call Now',
    rate: I18nManager.isRTL ? 'تقييم الطلب' : 'Rate Order',
    rateitem: I18nManager.isRTL ? 'قيم المنتج' : 'Rate Item',
    reorder: I18nManager.isRTL ? 'إعادة طلب المنتج نفسه' : 'Reorder',
    send: I18nManager.isRTL ? 'إرسال' : 'Send',
  },
  //cancelmodal
  CANCEL: {
    cancel: I18nManager.isRTL ? 'الغاء الطلب' : 'Cancel Order',
    selectCancel: I18nManager.isRTL
      ? 'حدد سبب الإلغاء'
      : 'Select Cancellation Reason',
    cancelReason: I18nManager.isRTL
      ? ' سبب الإلغاء '
      : 'Cancellation Reason',
    changemind: I18nManager.isRTL ? 'I Change My Mind' : 'I Change My Mind',
    message: I18nManager.isRTL ? 'تفاصيل الإلغاء' : 'Message',
    send: I18nManager.isRTL ? 'إرسال' : 'Send',
    issue: I18nManager.isRTL ? 'issue' : 'issue',
    order: I18nManager.isRTL
      ? 'Lorem ipsum dolor sit amet, consectetur adispiscing elutwe sed'
      : 'Lorem ipsum dolor sit amet, consectetur adispiscing elutwe sed',
  },
  NOTIFY: {
    heading: I18nManager.isRTL ? 'إشعارات' : 'Notifications',
    content1: I18nManager.isRTL
      ? 'Delivery executive Ahmed is assigned for your order KIS-1001'
      : 'Delivery executive Ahmed is assigned for your order KIS-1001',
    content2: I18nManager.isRTL
      ? 'Delivery date of your order KIS-1001 is set at 21/01/2021 10AM to 12PM'
      : 'Delivery date of your order KIS-1001 is set at 21/01/2021 10AM to 12PM',
    seedetails: I18nManager.isRTL
      ? 'انقر لرؤية التفاصيل'
      : 'Click to see details',
    hrs: I18nManager.isRTL ? 'قبل ساعة' : ' hrs ago',
    done_button: I18nManager.isRTL ? 'تم' : 'Done',
  },
  ACTIVE_DELIVER: {
    datejune: I18nManager.isRTL ? '20 June 2020 10AM..' : '20 June 2020 10AM..',
    expected: I18nManager.isRTL ? 'تاريخ التوصيل المتوقع' : 'Expected Delivery',
    orderkishk: I18nManager.isRTL ? 'طلب رقم ' : 'Order',
    delivery: I18nManager.isRTL ? 'عامل التوصيل' : 'Delivery Person',
    anwar: I18nManager.isRTL ? 'Anwar Ali' : 'Anwar Ali',
    review: I18nManager.isRTL ? 'راجع هذا الطلب' : 'Review this order',
    call: I18nManager.isRTL ? 'اتصل الآن' : 'Call Now',
    active: I18nManager.isRTL ? 'الطلبات القائمة' : 'Active',
    myorders: I18nManager.isRTL ? 'طلباتي' : 'My Orders',
    delivered: I18nManager.isRTL ? 'تاريخ الطلب' : 'Order History',
    ready: I18nManager.isRTL ? 'طلباتي' : 'Ready for Delivery',
    deliveredon: I18nManager.isRTL ? 'تم التسليم' : 'Delivered On',
    feb: I18nManager.isRTL
      ? '02 Feb 2021, 10AM to 12PM'
      : '02 Feb 2021, 10AM to 12PM',
    placed: I18nManager.isRTL ? 'تاريخ الطلب ' : 'Placed On',
  },
  FAQ: {
    Faq: I18nManager.isRTL ? 'الأسئلة الاكثر شيوعاً' : 'FAQs',
    ut: I18nManager.isRTL
      ? 'Ut porta diam at ornare tempus ?'
      : 'Ut porta diam at ornare tempus ?',
    line1: I18nManager.isRTL
      ? 'commodo elit. Nunc fermentus metus'
      : 'commodo elit. Nunc fermentus metus',
    line2: I18nManager.isRTL
      ? 'Nullam eum liberto sed interdum finibus'
      : 'Nullam eum liberto sed interdum finibus',
    line3: I18nManager.isRTL
      ? 'porta diem et ornare tempus'
      : 'porta diem et ornare tempus',
    line4: I18nManager.isRTL
      ? 'In mauris lectus, fecilisis nec accumsan vitae'
      : 'In mauris lectus, fecilisis nec accumsan vitae',
    line5: I18nManager.isRTL
      ? 'Contrary to popular belief , Lorem Ipsum is not simply random in text. It has roots in a piece of classiscal literarute from 45BC making it over 2000 years old'
      : 'Contrary to popular belief , Lorem Ipsum is not simply random in text. It has roots in a piece of classiscal literarute from 45BC making it over 2000 years old',
  },
  DETAIL: {
    should: I18nManager.isRTL ? 'Shoulder Size' : 'Shoulder Size',
    ches: I18nManager.isRTL ? 'Chest Length' : 'Chest Length',
    nec: I18nManager.isRTL ? 'Neck Size' : 'Neck Size',
    leng: I18nManager.isRTL ? 'Length' : 'Length',
  },
  ALERT_MESSAGES: {
    enterValidPhoneNumber: I18nManager.isRTL
      ? 'يجب أن يتكون رقم الهاتف من 8 أرقام'
      : 'Enter a valid phone number',
    noInternet: I18nManager.isRTL
      ? 'لا يوجد اتصال بابشبكة'
      : 'No Network Connection',
    success: I18nManager.isRTL ? 'تم الدفع بنجاح' : 'Success',
    error: I18nManager.isRTL ? 'خطأ' : 'Error',
    nameRequired: I18nManager.isRTL ? 'الاسم مطلوب' : 'Name is rquired',
    emailRequired: I18nManager.isRTL
      ? 'عنوان البريد الإلكتروني مطلوب'
      : 'Email address is required',
    validEmailRequired: I18nManager.isRTL
      ? 'الرجاء إدخال بريد إلكتروني صحيح'
      : 'Enter a valid email address',
    phoneRequired: I18nManager.isRTL
      ? 'رقم الهاتف مطلوب'
      : 'Phone number is required',
    firstnameRequired: I18nManager.isRTL
      ? 'الإسم الأول مطلوب'
      : 'First name is required',
    lastnameRequired: I18nManager.isRTL
      ? 'إسم العائلة مطلوب'
      : 'Last name is required',
    middlenameRequired: I18nManager.isRTL
      ? 'الاسم الأوسط مطلوب'
      : 'Middle name is required',
    messageRequired: I18nManager.isRTL
      ? 'Message is required'
      : 'Message is required',
    subjectRequired: I18nManager.isRTL
      ? 'Subject is required'
      : 'Subject is required',
    termsRequired: I18nManager.isRTL
      ? 'الرجاء قبول الشروط والأحكام'
      : 'Please accept terms and conditions',
    nameRequired: I18nManager.isRTL ? 'الاسم مطلوب' : 'Name is required',
    apartmentRequired: I18nManager.isRTL
      ? ' رقم المنزل مطلوب'
      : 'House / Floor number is required',
    poRequired: I18nManager.isRTL
      ? 'رقم المجمع مطلوب'
      : 'Block Number is required',
    landmarkRequired: I18nManager.isRTL
      ? 'Lankmark is required'
      : 'Lankmark is required',
    regionRequired: I18nManager.isRTL
      ? 'الشارع مطلوب'
      : 'Street is required',
    defaultRequired: I18nManager.isRTL
      ? 'أجعله العنوان الاساسي'
      : 'Make as default Address',
    billtypeRequired: I18nManager.isRTL
      ? 'الرجاء اختيار نوع العنوان'
      : 'Please select your address type',
    noAddress: I18nManager.isRTL ? 'اختر العنوان' : 'Select address',
    noBillingAddress: I18nManager.isRTL
      ? 'عنوان الفواتير لم يتم اختياره'
      : 'Billing address not selected',
    noDeliveryAddress: I18nManager.isRTL
      ? 'عنوان التوصيل لم يتم اختياره'
      : 'Delivery address not selected',
    payModeNotSelected: I18nManager.isRTL
      ? 'الرجاء اختيار طريقة الدفع'
      : 'Please select your payment method',
    reciptNotSelected: I18nManager.isRTL
      ? 'الرجاء تحديد قسيمة الدفع'
      : 'Please select payment slip',
    reorderpro: I18nManager.isRTL
      ? 'هل أنت متأكد من إعادة طلب هذا المنتج؟'
      : 'Are you sure to reorder this product?',
    reorderthis: I18nManager.isRTL
      ? 'هل أنت متأكد من إعادة مثل الطلب؟'
      : 'Are you sure to reorder?',
    remove_cart: I18nManager.isRTL
      ? 'هل أنت متأكد من إزالة هذا المنتج من سلة التسوق؟'
      : 'Are you sure to remove this item from cart?',
    dobRequired: I18nManager.isRTL ? 'Dob is required' : 'Dob is required',
  },
  LOGIN_TOASTMESSAGES: {
    error: I18nManager.isRTL ? 'خطأ' : 'Error',
    required: I18nManager.isRTL ? 'رقم الهاتف مطلوب' : 'Phone number required!',
    requiredmail: I18nManager.isRTL
      ? 'الرجاء إدخال عنوان البريد الإلكتروني الخاص بك'
      : ' Please enter your Email Address',
    digit: I18nManager.isRTL
      ? 'يجب أن يتكون رقم الهاتف من 8 أرقام'
      : 'Phone number should be 8 digits in length',
    mailvalid: I18nManager.isRTL
      ? 'الرجاء إدخال بريد إلكتروني صحيح'
      : 'Please enter a valid Email ID',
    otp: I18nManager.isRTL ? 'الرجاء إدخال الOTP' : 'Please enter OTP',
    otpsend: I18nManager.isRTL
      ? 'تم أراسل الOTP بنجاح'
      : 'OTP send successfully',
    logout: I18nManager.isRTL ? 'تسجيل الخروج' : 'logout',
  },
  VALIDATION_MESSAGE: {
    Type: I18nManager.isRTL ? 'خطأ' : 'error',
    Mobile_error_msg: I18nManager.isRTL
      ? 'Please enter something'
      : 'Please enter something',
  },
  GUEST: {
    guestName: I18nManager.isRTL ? 'مرحبا بك' : 'Welcome Guest!',
    guestlogin: I18nManager.isRTL
      ? 'الرجاء تسجيل الدخول لتكتشف كشك'
      : 'Please login to explore kishk',
  },
};
