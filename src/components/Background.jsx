import Plx from "react-plx";

function Background() {
  return (
    <Plx
      className="fixed flex items-center justify-center w-20 h-20 p-20 rounded-full -right-14 -bottom-14 nm-inset-gray-900-xl"
      parallaxData={[
        {
          start: 0,
          end: 1000,
          properties: [
            {
              startValue: 0,
              endValue: 360,
              property: "rotate",
            },
          ],
        },
      ]}
    >
      <div className="flex items-center justify-center w-5 h-5 p-5 rounded-full nm-flat-gray-900-lg">
        <div className="w-2 h-2 p-1 bg-yellow-600 rounded-full"></div>
      </div>
    </Plx>
  );
}

export default Background;
