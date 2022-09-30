import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Routes from './routes.js';

const App = () => {
	const [loading, setLoading] = useState(true)
	const spinner = document.getElementById('spinner')

	if(spinner) {
		setTimeout(() => {
			spinner.style.display = "none";
			setLoading(false);
		}, 1000)
	}

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    !loading && (
			<Routes/>
		)
  );
}
export default App;