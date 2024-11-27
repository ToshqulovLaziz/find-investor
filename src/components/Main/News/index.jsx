const News = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Yangiliklar
        </h2>
        <p className="text-lg text-gray-600 mb-12 w-[500px] mx-auto">
          Biznesni rivojlantirish bo{"'"}yicha so{"'"}nggi yangiliklar,
          tadbirlar va muhim ma{"'"}lumotlarni ushbu bo{"'"}limda topishingiz
          mumkin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex  flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Yangilik 1
            </h3>
            <p className="text-gray-600 mb-4">
              Biznesni rivojlantirish bo{"'"}yicha so{"'"}nggi yangiliklar va
              tadbirlar haqida qisqacha ma{"'"}lumot.
            </p>
            <a
              href="#"
              className="bg-[#2db945] hover:bg-white text-white text-[18px] hover:text-[#2db945] border-2 hover:border-[#2db945] font-bold py-2 px-6 rounded-[10px] tracking-[1.6px]"
            >
              Batafsil o{"'"}qish
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Yangilik 2
            </h3>
            <p className="text-gray-600 mb-4">
              Yangi boshlanuvchi tadbirkorlar uchun mo{"'"}ljallangan treninglar
              va seminarlar haqida yangiliklar.
            </p>
            <a
              href="#"
              className="bg-[#2db945] hover:bg-white text-white text-[18px] hover:text-[#2db945] border-2 hover:border-[#2db945] font-bold py-2 px-6 rounded-[10px] tracking-[1.6px]"
            >
              Batafsil o{"'"}qish
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105  flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Yangilik 3
            </h3>
            <p className="text-gray-600 mb-4">
              Investitsiya olish uchun yangi imkoniyatlar va bizneslarni qo{"'"}
              llab-quvvatlash tadbirlari.
            </p>
            <a
              href="#"
              className="bg-[#2db945] hover:bg-white text-white text-[18px] hover:text-[#2db945] border-2 hover:border-[#2db945] font-bold py-2 px-6 rounded-[10px] tracking-[1.6px]"
            >
              Batafsil o{"'"}qish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
