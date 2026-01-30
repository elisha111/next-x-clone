import { postTweet } from "@/server-actions/post-tweet";

export const TweetForm = () => {
  return (
    <form
      action={postTweet}
      className="border border-white/10 rounded-xl p-4 bg-neutral-90 text-white space-y-3 mb-5"
    >
      <input
        className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
        name="content"
        placeholder="What's happening?"
        type="text"
      />
      <div className="flex justify-end">
        <button
          className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition"
          type="submit"
        >
          Tweet
        </button>
      </div>
    </form>
  );
};
