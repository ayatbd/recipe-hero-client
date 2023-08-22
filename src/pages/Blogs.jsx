/* eslint-disable react/no-unescaped-entities */
import { createRef } from "react";
import { useNavigation } from "react-router-dom";
import PagesBanner from "../shared/PagesBanner";
import Container from "../components/Container";
const Blogs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-blue-700"></div>
      </div>
    );
  }
  const ref = createRef();
  return (
    <Container>
      <div>
        <PagesBanner>Blog</PagesBanner>
        {/* <div
        className="max-container mt-8 md:mt-14 text-right "
        onClick={() => toast.success("Blog content downloaded.")}
      ></div> */}
        <div
          className="min-h-[60vh] max-container mt-3 md:mt-5 mb-8 md:mb-14 flex justify-center px-4 lg:px-0"
          ref={ref}
        >
          <div className="flex flex-col gap-5">
            <div className="bg-slate-200 p-5 rounded-md shadow hover:shadow-lg">
              <h1 className="text-xl font-semibold mb-3">
                Question-01: Tell us the differences between uncontrolled and
                controlled components?
              </h1>
              <p className="text-gray-600">
                Ans: The difference between uncontrolled and controlled
                components is that they are controlled by the parent component.
                The parent component is the component that is controlled by the
                child component. The child component is the component that is
                controlled by the parent component.
              </p>
            </div>
            <div className="bg-slate-200 p-5 rounded-md shadow hover:shadow-lg">
              <h1 className="text-xl font-semibold mb-3">
                Question-02: How to validate React props using PropTypes?
              </h1>
              <p className="text-gray-600">
                Ans: In React, PropTypes is a utility that allows you to define
                the expected types of props that a component should receive.
                This helps to catch errors early on and make your code more
                robust.
              </p>
            </div>
            <div className="bg-slate-200 p-5 rounded-md shadow hover:shadow-lg">
              <h1 className="text-xl font-semibold mb-3">
                Question-03: Tell us the difference between nodejs and express
                js?
              </h1>
              <p className="text-gray-600">
                Ans: Express is a minimal and flexible node. js web application
                framework, providing a robust set of features for building
                single and multi-page, and hybrid web applications. On the other
                hand, Node. js is detailed as "A platform built on Chrome's
                JavaScript runtime for easily building fast, scalable network
                applications".
              </p>
            </div>
            <div className="bg-slate-200 p-5 rounded-md shadow hover:shadow-lg">
              <h1 className="text-xl font-semibold mb-3">
                Question-04: What is a custom hook, and why will you create a
                custom hook?
              </h1>
              <p className="text-gray-600">
                Ans: Custom React JS hooks offer reusability as when a custom
                hook is created, it can be reused easily, which makes the code
                cleaner and reduces the time to write the code. It also enhances
                the rendering speed of the code as a custom hook does not need
                to be rendered again and again while rendering the whole code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
