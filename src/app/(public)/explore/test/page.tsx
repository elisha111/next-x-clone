import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test",
};

interface SearchParams {
  tag?: string;
}

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function TestPage(props: PageProps) {
  const { searchParams } = props;

  const { tag } = await searchParams;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        TestPage {!!tag && `by #${tag}`}
      </h1>
    </div>
  );
}
