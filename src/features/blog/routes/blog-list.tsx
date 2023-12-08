import Icon from "@/components/ui/icon";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReactMarkdown from "react-markdown";

// import md from "/blog.md"

const BlogList: React.FC = () => {
  const { data: markdown, isLoading } = useQuery({
    queryFn: () => fetch("/blog.md").then((data) => data.text()),
    queryKey: ["mdx"],
  });

  if (isLoading && !markdown) {
    return <Icon name="Loader2" className="animate-spin" />;
  }

  return (
    <div>
      <div className="prose prose-lg mx-auto">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <div className="prose">
        <h1>Lorem ipsum, dolor sit amet consectetur</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea
          voluptatem cumque a perferendis, placeat pariatur deserunt tenetur
          esse accusamus temporibus eveniet commodi. Ab harum quidem quaerat,
          nisi cum consequuntur officia, sint quasi, neque beatae inventore
          impedit illo aperiam. Aut consequatur explicabo tenetur dicta? Saepe,
          dolorum perspiciatis. Quibusdam, omnis cumque!
        </p>
      </div>
    </div>
  );
};

export default BlogList;
