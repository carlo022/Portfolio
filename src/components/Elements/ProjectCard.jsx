const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-450 h-48 object-cover transition-transform duration-300 group-hover:scale-110 size-300 rounded-t-lg"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Proview
            </button>
          </a>
          <div className="px-6 py-4">
            <header>
              <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
            </header>
            <p className="text-gray-200 text-base">{description}</p>
          </div>
        </figure>
      </div>
    </article>
  );
};

export default ProjectCard;
