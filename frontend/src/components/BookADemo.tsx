import Link from "next/link";

const BookADemo = () => {
    
  
  return (
     <div className="text-center mt-16">
          <div className="inline-block bg-[#077A7D]  p-8 shadow-lg border border-gray-200 w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to streamline your project reporting?
            </h3>
            <p className="text-gray-200 mb-6 ">
              Get comprehensive insights into your projects, teams, tasks, and schedules all in one place.
            </p>
            <Link href='#contact' className="border text-white px-8 py-3 rounded font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Link>
          </div>
        </div>
  );
};

export default BookADemo;
