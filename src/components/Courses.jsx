export default function Courses() {
  const courseList = [
    {
      id: 1,
      badgeText: "Industry Focused",
      badgeColor: "bg-green-100 text-green-700",
      title: "AWS Cloud Architect",
      desc: "Design scalable architectures, VPC, IAM, EC2, Load Balancing & Security.",
      duration: "16 Weeks Duration",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      badgeText: "Most Popular",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "Data Science & ML",
      desc: "Python, Pandas, Machine Learning models, and MLOps overview.",
      duration: "14 Weeks Duration",
      level: "Intermediate"
    },
    {
      id: 3,
      badgeText: "Career Switch",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "Cloud & DevOps",
      desc: "AWS/Azure basics, Docker, Kubernetes, CI/CD pipelines & Terraform.",
      duration: "12 Weeks Duration",
      level: "Intermediate"
    },
    {
      id: 4,
      badgeText: "New",
      badgeColor: "bg-yellow-100 text-yellow-800",
      title: "Cybersecurity",
      desc: "Network security, SIEM, threat modeling, and Blue Team labs.",
      duration: "10 Weeks Duration",
      level: "Beginner"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-darkbg mt-2">In-Demand Tech Skills</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseList.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className={`${course.badgeColor} text-xs px-2 py-1 rounded-full font-bold`}>
                  {course.badgeText}
                </span>
              </div>
              <h3 className="text-xl font-bold text-darkbg mb-2">{course.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{course.desc}</p>
              <div className="text-xs text-slate-500 mb-4 space-y-1">
                <p>• {course.duration}</p>
                <p>• {course.level}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <a href="#contact" className="py-2 text-center rounded-xl bg-accent text-white text-sm font-bold">Enroll</a>
                <a href="#" className="py-2 text-center rounded-xl border border-primary text-primary text-sm font-bold">Syllabus</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}