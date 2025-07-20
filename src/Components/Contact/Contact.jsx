
import img1 from '../Images/blbanplace.jpg'
export default function Contact() {
  
  return (
    <div>
    {/* section one */}
        <div className='text-white bg-blue-600 px-28 py-6 border-t border-blue-900'>
            <div>
                <p className='text-3xl font-extrabold'>Contact Us</p>

            </div>
        </div>
        {/* section two */}
        <div className='flex items-center gap-14 px-20 mt-20 lg:flex-row flex-col'>
                <section class="flex-1   w-full mx-auto p-6  bg-white rounded-xl shadow-md mt-10">
            <h2 class="text-2xl font-bold mb-4 text-center">تواصل معنا</h2>
            <form class="space-y-4">
                <div>
                <label for="name" class="block mb-1 font-medium">الاسم</label>
                <input type="text" id="name" name="name" placeholder="ادخل اسمك"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                <label for="email" class="block mb-1 font-medium">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" placeholder="ادخل بريدك"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                <label for="message" class="block mb-1 font-medium">رسالتك</label>
                <textarea id="message" name="message" rows="4" placeholder="اكتب رسالتك"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">إرسال</button>
            </form>
        </section>
        <div className='leading-6'>
            <p className='font-bold text-4xl mb-3'>B.Laban - بـ لبن Dairy Products</p>
            <div className='text-gray-500 text-lg'>
                    <p >9 Abbas Helmy Street, Al Merghani</p>
            <p>Cairo, Egypt</p>
            <p>Phone: +20 15761</p>

            </div>
            
            <img src={img1} alt='blban-place' className='w-[500px] mt-2 h-[400px] rounded-2xl'></img>
        </div>

        </div>
        <div className="mt-16 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">موقعنا على الخريطة</h2>
            <div className="w-full  mx-auto h-[450px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.057169178746!2d31.323840966063873!3d30.09254900212187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f982c8aa3cd%3A0xfa9e5f456ee01e17!2z2Kgg2YTYqNmG!5e0!3m2!1sar!2seg!4v1752762194960!5m2!1sar!2seg"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div>
           

        </div>

    </div>
  )
}
