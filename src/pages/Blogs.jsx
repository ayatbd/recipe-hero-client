const Blogs = () => {
  return (
    <div className="pl-28 space-y-3 my-12">
      <div>
        <p className="text-left">
          <span className="font-bold mr-5">Q.</span>What is an access token and
          refresh token? How do they work and where should we store them on the
          client-side?
        </p>
        <p className="text-left">
          <span className="font-bold mr-5 underline">Ans.</span>Access Token: A
          token that grants a client access to protected resources. It's
          short-lived and should be stored in memory or session storage. Refresh
          Token: A token used to obtain a new access token when it expires. It's
          long-lived and should be securely stored in an HTTP-only secure cookie
          or a platform-specific secure storage mechanism.
        </p>
      </div>
      <div>
        <p className="text-left">
          <span className="font-bold mr-5">Q.</span>Compare SQL and NoSQL
          databases?
        </p>
        <p className="text-left">
          <span className="font-bold mr-5 underline">Ans.</span>
SQL Databases: Relational, structured, use SQL for querying, suitable for complex relationships, strong consistency.
NoSQL Databases: Non-relational, flexible schema, various data models (key-value, document, graph, columnar), scalable, sacrifice some consistency for scalability.
        </p>
      </div>
      <div>
        <p className="text-left">
          <span className="font-bold mr-5">Q.</span>What is express js? What is
          Nest JS (google it)?
        </p>
        <p className="text-left">
          <span className="font-bold mr-5 underline">Ans.</span>Express.js: A minimalistic and flexible web application framework for Node.js, used for building server-side applications and APIs.

Nest.js: A progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It follows the architectural principles of Angular, utilizes TypeScript, and provides features like dependency injection, decorators, and modules.
        </p>
      </div>
      <div>
        <p className="text-left">
          <span className="font-bold mr-5">Q.</span>What is MongoDB aggregate
          and how does it work (google it)?
        </p>
        <p className="text-left">
          <span className="font-bold mr-5 underline">Ans.</span>In MongoDB, the aggregate method is used to perform advanced data processing and analysis operations on the data stored in collections. It allows you to perform various operations like filtering, grouping, sorting, and transforming data using a pipeline of stages. The pipeline consists of multiple stages, each applying a specific operation to the input documents and passing the result to the next stage.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
