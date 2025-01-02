
const messagelist = [
    
]

const List = () => {
  return (
    <div>
      <div className="flex items-start gap-3 p-4 border-b border-white/10 hover:bg-white/5 cursor-pointer hover:rounded-lg">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gray-100/50 rounded-full" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <span className="font-bold">John Doe</span>
            <span className="text-gray-500">@johndoe</span>
          </div>
          <div className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
