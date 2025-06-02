import { Heart, Eye, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WorkCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
}

const WorkCard = ({
  title,
  author,
  image,
  likes,
  views,
  comments,
  tags,
}: WorkCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end p-4">
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-white text-sm">
              <Heart className="w-4 h-4 mr-1" />
              {likes}
            </div>
            <div className="flex items-center text-white text-sm">
              <Eye className="w-4 h-4 mr-1" />
              {views}
            </div>
            <div className="flex items-center text-white text-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              {comments}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{author}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WorkCard;
