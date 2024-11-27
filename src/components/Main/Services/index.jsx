const Services = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Bizning Xizmatlarimiz
        </h2>
        <p className="text-lg text-gray-600 mb-12 w-[700px] mx-auto">
          Biz tadbirkorlar uchun g{"'"}oyalarini amalga oshirishga yordam beruvchi
          platformani taqdim etamiz, shu bilan birga ularni investorlar bilan
          bog{"'"}laymiz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Biznes G{"'"}oyasini Joylashtirish
            </h3>
            <p className="text-gray-600">
              Ro{"'"}yxatdan o{"'"}ting va biznes g{"'"}oyalaringizni investorlar uchun
              taqdim eting, shu orqali o{"'"}z g{"'"}oyangizni namoyish qiling.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Investorlar Bilan Hamkorlik
            </h3>
            <p className="text-gray-600">
              Investorlar biznes rejalaringizni ko{"'"}rib chiqishlari va mablag{"'"}
              ajratish imkoniyatini ko{"'"}rib chiqishlari mumkin.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Loyihaning Ko{"'"}rinishi
            </h3>
            <p className="text-gray-600">
              Biznes loyihalaringizni keng auditoriyaga namoyish eting va yangi
              hamkorlarni jalb qiling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
