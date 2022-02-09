import AppRouter from "AppRouter";
import TopNavBar from "components/Sidebar/TopNavBar";

const App = () => {
  return (
    <>
      <AppRouter>
        <TopNavBar />
      </AppRouter>
    </>
  );
};

export default App;
