import { useParams } from "react-router-dom";

const Server = () => {
  const { id } = useParams();

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 shadow-sm h-12 flex items-center text-white font-title">
          Server {id}
        </div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-2 font-medium">
          {[...Array(40)].map((_, i) => (
            <p>Channels {i}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-3 shadow-sm text-white">General</div>
        <div className="flex-1 p-4 overflow-y-scroll space-y-2">
          {[...Array(40)].map((_, i) => (
            <p>
              Messages {i}: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec sed maximus neque. Duis ut rhoncus nisi. Vestibulum
              vitae ex odio. Sed sagittis viverra ligula volutpat suscipit.
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Server;
