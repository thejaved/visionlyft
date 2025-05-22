"use client";
import React from "react";
import Button from "@/components/ui/Button";
import Header from "@/components/common/Header";
import HeroSection from "@/components/common/HeroSection";
import { FiEdit, FiBookOpen } from "react-icons/fi";

const dummyPosts = [
  {
    id: 1,
    title: "Getting Started with Visionlyft API",
    description:
      "A beginner’s guide to using the auto-generated endpoints for your models.",
    date: "May 15, 2025",
    author: "Team Visionlyft",
  },
  {
    id: 2,
    title: "Changelog: April 2025",
    description:
      "Explore the latest improvements, fixes, and feature updates released this month.",
    date: "May 1, 2025",
    author: "Javed Khan",
  },
];

function BlogPage() {
  return (
    <>
      <Header />
      <HeroSection
        title="Visionlyft Blog"
        description="Explore announcements, product updates, API tips, and insights from the Visionlyft team."
        buttons={
          <>
            <Button
              variant="secondary"
              onClick={() => console.log("Create New Post")}
            >
              <FiEdit size={16} />
              Create Post
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("Read Documentation")}
            >
              <FiBookOpen size={16} />
              Read Docs
            </Button>
          </>
        }
      />

      {/* Blog List Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyPosts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-900 text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-zinc-400 mb-4">{post.description}</p>
              <div className="text-sm text-zinc-500 flex justify-between items-center">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogPage;
