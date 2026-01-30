import type { Metadata } from "next";

interface SearchParams {
  username?: string;
}

interface PageProps {
  params: Promise<SearchParams>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;

  return {
    title: "@" + (await params).username,
  };
}

export default async function TestPage(props: PageProps) {
  const { params } = props;

  const { username } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile @{username}</h1>
    </div>
  );
}
