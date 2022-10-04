export const Card = () => {
  return (
    <div className="flex flex-col">
      <p className="card__intro opacity-100 lg:hover:opacity-100 truncate w-52 text-base font-semibold px-1 peer">
        PADAYON General Incorporated Association
      </p>
      <a
        href="/products/ghost-whey-vegan"
        className="card relative w-52 h-52 mr-3 group "
      >
        <img
          alt="Developer"
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          class="absolute inset-0 object-cover w-52 h-52 rounded-2xl transition-opacity group-hover:opacity-50 group-hover:border-indigo-500 group-hover:bg-slate-100 border-transparent border-4"
        />
        <div class="relative p-8 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Website
          </p>
          <p class="text-base font-bold text-white">
            「PADAYON」General Incorporated Association
          </p>
        </div>
      </a>
    </div>
  );
};
