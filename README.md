# 📌 React Project Structure Guide

أهلاً بيك 👋

الملف ده يعتبر دليل سريع للمشروع، بيشرح تنظيم الملفات والفولدرات، وظيفة كل جزء، والمكتبات المستخدمة وطريقة استخدامها، عشان أي Developer يدخل المشروع يقدر يفهم الـ Structure وطريقة الشغل بسهولة.

---

# 🚀 Tech Stack

المشروع معمول باستخدام:

* ⚛️ React 19
* ⚡ Vite
* 🎨 Bootstrap 5
* 🛣️ React Router DOM لإدارة الـ Routing والصفحات
* 🌐 i18next للغات
* 🔥 React Query لإدارة الـ Server State والـ API Data
* 📡 Axios للـ API Requests
* 📝 Formik للفورم
* ✅ Yup للـ Validation
* 🔔 Sonner للـ Notifications
* 🦄 FontAwesome للأيقونات

---

# 📂 Project Structure

```
src
│
├── api
├── assets
├── components
├── context
├── hooks
├── i18n
├── locales
├── pages
├── styles
├── utils
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# 📁 api

المكان المسؤول عن إعدادات الـ API.

مثلاً:

```
api
 └── axios.js
```

## axios.js

هنا بنعمل إعداد Axios الأساسي للمشروع.

بدل ما كل مرة نكتب:

```js
axios.get("https://api.com/products")
```

بنعمل instance واحدة فيها:

* Base URL
* Headers
* Interceptors

وبعد كده نستخدمها في كل المشروع.

مثال:

```js
api.get("/products")
```

---

# 📁 assets

ده مكان الملفات الثابتة الخاصة بالمشروع.

زي:

```
assets
│
├── images
│
└── Fonts
```

## images

بنحط فيه:

* الصور
* اللوجو
* الـ icons الخاصة بالتصميم

---

## Fonts

لو عندنا Font خاص بالمشروع بنحطه هنا.

مثال:

```
Fonts
 └── Hacen.ttf
```

وبنربطه في CSS عن طريق:

```css
@font-face {
  font-family: "Hacen";
  src: url("/fonts/Hacen.ttf");
}
```

---

# 📁 components

ده مكان الـ Components المشتركة.

أي حاجة بتستخدم أكتر من مرة تتحط هنا.

مثال:

```
components

├── Layouts

└── Ui
```

---

# 📁 components/Layout

ده مسؤول عن شكل الموقع الأساسي.

بيكون فيه الأجزاء المشتركة في كل الصفحات مثل:

* Navbar
* Footer
* Sidebar
* Container
* Outlet

مثال:

```
Navbar
+
Page Content
+
Footer
```

---

# 📁 components/Ui

ده للـ Components الصغيرة اللي بتتكرر.

زي:

* Button
* Input
* Modal
* Loader
* Card

مثال:

```
Ui
│
├── Button.jsx
├── Input.jsx
└── Loader.jsx
```

---

# 📁 context

ده مكان الـ React Contexts.

بنستخدمه للحاجات الـ Global في المشروع.

مثال:

* User
* Authentication
* Theme
* Language

مثال:

```
context

├── AuthContext.jsx
└── ThemeContext.jsx
```

---

# 📁 hooks

ده مكان الـ Custom Hooks.

أي Logic بيتكرر نطلعه Hook.

مثال:

بدل ما أكتب:

```js
useEffect()
fetch()
loading
error
```

في كل Component

أعمل:

```
hooks

└── useProducts.js
```

واستخدمه في أي مكان.

---

# 📁 i18n

مسؤول عن إعداد الترجمة.

مثال:

```
i18n

└── i18n.js
```

هنا بنربط مكتبة:

* i18next
* react-i18next

---

# 📁 locales

ده مكان ملفات اللغات.

مثال:

```
locales

├── ar.json

└── en.json
```

بدل ما نكتب:

```jsx
<h1>Home</h1>
```

نكتب:

```jsx
<h1>
{t("home")}
</h1>
```

واللغة تتغير حسب اختيار المستخدم.

---

# 📁 pages

ده مكان صفحات الموقع كاملة.

كل صفحة ليها Folder خاص بيها.

مثال:

```
pages

└── Home

    └── Home.jsx
```

ممكن يكون:

```
pages

├── Home

├── Products

├── Contact

└── About
```

---

# 📁 styles

ده مكان ملفات الـ CSS.

كل Page أو Section كبير له ملف CSS خاص بيه.

مثال:

```
styles

├── contact-us

│    └── contact-us.css


└── products

     └── products.css
```

الفكرة:

كل جزء يكون له Style منفصل عشان المشروع مايبقاش ملف CSS ضخم.

---

# 📁 utils

ده مكان الـ Helper Functions.

أي function عامة مش مرتبطة بصفحة معينة تتحط هنا.

مثال:

* Format Date
* Convert Currency
* Validate Data

مثال:

```
utils

└── formatDate.js
```

---

# 📄 main.jsx

ده أول ملف React بيشتغل.

مسؤول عن:

* تشغيل React
* ربط App
* Import الـ Global CSS
* Providers

مثال:

```jsx
createRoot(document.getElementById("root"))
.render(
 <App />
)
```

---

# 📄 App.jsx

ده قلب التطبيق.

بيحتوي على:

* Routes
* Providers
* Layout

---

# 📄 index.css

ده الـ Global CSS.

نحط فيه:

* Reset CSS
* Body Style
* Global Variables

مثال:

```css
body{
 margin:0;
 font-family:"Roboto";
}
```

---

# 📄 App.css

ستايلات خاصة بالـ App Component فقط.

---

# 📚 Libraries Explanation

---

# ⚡ Vite

مسؤول عن تشغيل وبناء المشروع.

بيوفر:

* Development Server سريع
* Build للمشروع

الأوامر:

تشغيل المشروع:

```
npm run dev
```

Build:

```
npm run build
```

---

# 🎨 Bootstrap

مكتبة CSS جاهزة.

بتوفر:

* Grid System
* Buttons
* Cards
* Forms
* Responsive Design

مثال:

```jsx
<button className="btn btn-primary">
Save
</button>
```

---

# 🛣️ React Router DOM

مكتبة مسؤولة عن إدارة الـ Routing في تطبيق React.

بنستخدمها عشان نعمل صفحات متعددة داخل المشروع والتنقل بينهم بدون Reload للصفحة.

بتوفر:

* إنشاء Routes
* تنظيم Layout مشترك للصفحات
* Navigation بين الصفحات
* Protected Routes
* التعامل مع URL Parameters

---

## createBrowserRouter

بنستخدمها لإنشاء الـ Router الخاص بالمشروع.

مثال:

```jsx
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
])
```

---

## Layout + Outlet

الـ Layout يحتوي على الأجزاء المشتركة مثل:

* Navbar
* Footer

والـ `Outlet` هو المكان اللي بيظهر فيه محتوى الصفحات الداخلية.

مثال:

```
Layout

│
├── Navbar
│
├── Outlet
│     └── Home
│
└── Footer
```

---

## RouterProvider

بنربط الـ Router بالتطبيق من خلال:

```jsx
<RouterProvider router={router}/>
```

---

## Link

للتنقل بين الصفحات بدون Reload.

مثال:

```jsx
<Link to="/products">
Products
</Link>
```

---

## useNavigate

للتنقل بالـ JavaScript.

مثال:

```jsx
const navigate = useNavigate();

navigate("/login");
```

---

## useParams

للقراءة من الـ URL.

مثال:

```jsx
/product/:id
```

نجيب الـ id:

```jsx
const { id } = useParams();
```

---

# 📡 Axios

بنستخدمه للتعامل مع الـ API.

مثال:

GET:

```js
api.get("/products")
```

POST:

```js
api.post("/login",data)
```

---

# 🔥 React Query

مسؤولة عن إدارة الـ Server State والـ API Data.

بتوفر:

* Fetching Data
* Loading
* Error Handling
* Cache
* Refetch

مثال:

```js
useQuery()
```

---

# 📝 Formik

مكتبة لإدارة الـ Forms في React.

بتساعدنا في:

* التحكم في قيم الـ Inputs
* متابعة حالة الـ Form
* التعامل مع Submit
* إدارة الـ Errors
* ربط الـ Validation مع Yup

بدل ما نعمل `useState()` لكل Input في الفورم.

---

# ✅ Yup

مكتبة مسؤولة عن الـ Validation (التحقق من صحة البيانات).

بنستخدمها مع Formik عشان نحدد شروط الـ Forms.

مثال:

* التأكد إن الـ Email صحيح
* التأكد إن الـ Password مطابق للشروط
* إظهار رسائل الخطأ للمستخدم

مثال:

```js
validationSchema
```

بتحدد قواعد التحقق الخاصة بالفورم.

---

# 🌐 i18next

مسؤولة عن تعدد اللغات.

مثال:

عربي:

```json
{
"welcome":"مرحبا"
}
```

إنجليزي:

```json
{
"welcome":"Welcome"
}
```

---

# 🔔 Sonner

مكتبة Notifications.

مثال:

```js
toast.success("Login Done")
```

---

# 🦄 FontAwesome

مكتبة Icons.

مثال:

```jsx
<i className="fa-solid fa-user"/>
```

---

# 🔄 طريقة الشغل في المشروع

لما نعمل Feature جديدة:

مثلاً Products:

```
pages

└── Products

    └── Products.jsx


styles

└── products

    └── products.css
```

لو فيه Component بيتكرر:

```
components

└── Ui

    └── ProductCard.jsx
```

لو فيه API:

```
api
```

أو

```
services
```

حسب حجم المشروع.

---

# ✅ Rules في المشروع

✔️ كل Component له مكان واضح
✔️ ممنوع نحط CSS عشوائي
✔️ أي حاجة بتتكرر تتحول Component
✔️ أي Logic بيتكرر يتحول Hook
✔️ الـ API يكون بعيد عن الـ UI
✔️ كل صفحة يكون لها Folder خاص بيها

---

# 👩‍💻 الهدف من التنظيم

الهدف إن أي Developer يدخل المشروع يعرف:

* الكود مكانه فين
* يضيف Feature جديدة إزاي
* يصلح Bug فين
* المشروع يفضل سهل التعديل والتطوير

---

```
Happy Coding 🚀
```
