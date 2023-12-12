export default function CommentListing({ feedback }) {
  return (
    <div className="bg-white px-6 py-4 rounded-xl">
      <h2 className="text-lg font-bold text-clrText-primary">4 Comments</h2>

      <ul className="flex flex-col">
        {feedback?.comments?.map((comment, index) => {
          return (
            <li
              key={index}
              className="flex items-start gap-8 border-b-2 border-b-body py-8 last-of-type:border-none"
            >
              <figure className="rounded-full overflow-hidden w-10 h-10 select-none">
                <img
                  src={comment?.user?.image}
                  alt={comment?.user?.username}
                  title={comment?.user?.name}
                />
              </figure>
              <div className="flex flex-col grow">
                <div className="flex mt-0.5 justify-between items-center">
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-sm text-clrText-primary">
                      {comment?.user?.name}
                    </h4>
                    <span className="text-sm text-clrText-secondary">
                      @{comment?.user?.username}
                    </span>
                  </div>
                  <button className="text-clrBtn-blue font-semibold text-sm hover:underline transition-all duration-300">
                    Reply
                  </button>
                </div>
                <p className="mt-6 text-base text-clrText-secondary">
                  {comment?.content}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
