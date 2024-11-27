const Contact = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Bog{"'"}lanish</h2>
        <p className="text-lg text-gray-600 mb-12">
          Biz bilan bog{"'"}lanish uchun quyidagi ma{"'"}lumotlardan foydalaning. Biz sizga tez orada javob beramiz!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Telefon</h3>
            <p className="text-gray-600">+998 90 123 45 67</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600">info@biznesplatforma.uz</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
