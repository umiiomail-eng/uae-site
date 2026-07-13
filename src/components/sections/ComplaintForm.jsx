import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";
import {
  User,
  Phone,
  Mail,
  Building2,
  MapPin,
  FileText,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

import { getTrackingData } from "../../services/tracking";
import { GOOGLE_SCRIPT_URL } from "../../services/config";

import "../../styles/form.css";


const schema = z.object({

  fullName: z
    .string()
    .min(3, "يرجى إدخال الاسم الكامل")
    .regex(
      /^[\u0600-\u06FFa-zA-Z\s'.-]+$/,
      "يسمح بالأحرف العربية والإنجليزية فقط"
    ),

  phone: z
    .string()
    .min(1, "يرجى إدخال رقم الهاتف")
    .regex(
      /^(?:\+971|05)[0-9]{8,9}$/,
      "أدخل رقم هاتف إماراتي صحيح"
    ),

  email: z
    .string()
    .min(1, "يرجى إدخال البريد الإلكتروني")

    .email("البريد الإلكتروني غير صحيح"),


  emirate: z
    .string()
    .min(1, "اختر الإمارة"),


  complaintCategory: z
    .string()
    .min(1, "اختر نوع الشكوى"),

  companyName: z
    .string()
    .min(1, "يرجى إدخال اسم الشركة")
    .min(2, "اسم الشركة قصير جدًا"),

  complaintDetails: z
    .string()
    .min(1, "يرجى كتابة تفاصيل الشكوى")
    .min(20, "التفاصيل يجب أن تكون 20 حرفًا على الأقل"),
});


function ComplaintForm() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {

    register,
    handleSubmit,
    reset,
    formState: { errors }

  } = useForm({

    resolver: zodResolver(schema),
    mode: "all"

  });

  const submitForm = async (data) => {
    setLoading(true);

    const tracking = getTrackingData();

    const finalData = {
      ...data,
      ...tracking,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(finalData),
      });

      reset();

      navigate("/thank-you");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };



  const emirates = [

    "أبوظبي",
    "دبي",
    "الشارقة",
    "عجمان",
    "أم القيوين",
    "رأس الخيمة",
    "الفجيرة"

  ];


  const categories = [

    "شكوى تجارية",
    "شكوى ضد شركة",
    "حماية المستهلك",
    "الغش التجاري",
    "المتاجر الإلكترونية",
    "الاحتيال المالي",
    "التعويضات"

  ];



  return (

    <section className="form-section">

      <div className="container">


        <div className="form-box">


          <div className="form-head">

            <ShieldCheck size={40} />

            <h2>
              قدّم شكواك الآن
            </h2>


            <p>
              املأ البيانات التالية وسيتم استقبال البلاغ بطريقة منظمة وآمنة.
            </p>


          </div>



          <form onSubmit={handleSubmit(submitForm)}>


            <div className="form-grid">



              <div className="input-group">

                <label>الاسم الكامل</label>

                <div className="input-control">

                  <User />

                  <input
                    {...register("fullName")}
                    placeholder="محمد أحمد"
                  />

                </div>

                <p>{errors.fullName?.message}</p>

              </div>




              <div className="input-group">

                <label>رقم الهاتف</label>

                <div className="input-control">

                  <Phone />

                  <input
                    {...register("phone")}
                    placeholder="+9715XXXXXXXX"
                  />

                </div>

                <p>{errors.phone?.message}</p>

              </div>




              <div className="input-group">

                <label>البريد الإلكتروني</label>

                <div className="input-control">

                  <Mail />

                  <input
                    {...register("email")}
                    placeholder="example@email.com"
                  />

                </div>

                <p>{errors.email?.message}</p>

              </div>




              <div className="input-group">

                <label>الإمارة</label>

                <div className="input-control">

                  <MapPin />

                  <select {...register("emirate")}>

                    <option value="">
                      اختر الإمارة
                    </option>

                    {
                      emirates.map(e =>
                        <option key={e}>{e}</option>
                      )
                    }

                  </select>


                </div>
                <p>{errors.emirate?.message}</p>
              </div>





              <div className="input-group">

                <label>
                  نوع الشكوى
                </label>


                <div className="input-control">

                  <FileText />

                  <select {...register("complaintCategory")}>

                    <option value="">
                      اختر نوع الشكوى
                    </option>


                    {
                      categories.map(c =>
                        <option key={c}>{c}</option>
                      )
                    }


                  </select>


                </div>
                <p>{errors.complaintCategory?.message}</p>
              </div>




              <div className="input-group full">

                <label>
                  اسم الشركة أو المؤسسة
                </label>

                <div className="input-control">

                  <Building2 />

                  <input
                    {...register("companyName")}
                    placeholder="اسم الشركة"
                  />

                </div>
                <p>{errors.companyName?.message}</p>
              </div>




              <div className="input-group full">

                <label>
                  تفاصيل الشكوى
                </label>


                <textarea
                  {...register("complaintDetails")}
                  rows="6"
                  placeholder="اكتب تفاصيل الشكوى هنا..."
                />


                <p>
                  {errors.complaintDetails?.message}
                </p>


              </div>



            </div>


            <button
              disabled={loading}
              className="submit-btn"
            >
              {loading ? (
                "جاري الإرسال..."
              ) : (
                <>
                  <Send size={18} />
                  <span>إرسال الشكوى</span>
                </>
              )}
            </button>


          </form>


        </div>

      </div>






    </section>

  )

}


export default ComplaintForm;