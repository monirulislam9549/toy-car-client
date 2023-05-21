const Blog = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 text-justify px-5 my-10">
      <div className="shadow-lg p-5 rounded">
        <h1 className="font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          <span className="font-bold">Access Token:</span> An access token is a
          credential that is issued to a user after successful authentication.
          It is typically a short-lived token that grants access to specific
          resources or APIs on behalf of the user. Access tokens are commonly
          used in stateless authentication systems, such as JSON Web Tokens
          (JWT), and are included in the headers of API requests to authorize
          access to protected endpoints. Access tokens have an expiration time
          and are used to authenticate and authorize requests until they expire.
        </p>
        <p>
          <span className="font-bold">Refresh Token:</span> A refresh token is a
          long-lived credential that is issued alongside an access token. Its
          purpose is to obtain a new access token once the current one expires.
          Refresh tokens are securely stored by the client application and are
          sent to the authorization server when the access token needs to be
          refreshed. When a refresh token is exchanged, a new access token is
          issued, extending the users session without requiring them to
          re-authenticate. Refresh tokens are typically valid for a longer
          period of time than access tokens and can be revoked or invalidated by
          the authorization server.
        </p>
      </div>

      <div className="shadow-lg p-5 rounded">
        <div>
          <h1 className="font-bold">Compare SQL and NoSQL databases?</h1>
          <p className="font-bold">SQL Databases:</p>
          <li>
            Structure: SQL databases follow a structured data model with
            predefined schemas, tables, and relationships between tables.
          </li>
          <li>
            Data Integrity: SQL databases enforce data integrity through the use
            of ACID (Atomicity, Consistency, Isolation, Durability) properties,
            ensuring reliable transactions.
          </li>
          <li>
            Query Language: SQL databases use structured query language (SQL)
            for defining and manipulating data, allowing for complex querying
            and joins.
          </li>
        </div>
        <p className="font-bold">NoSQL Databases:</p>
        <li>
          Structure: NoSQL databases follow a flexible data model, allowing for
          unstructured or semi-structured data without predefined schemas or
          table relationships.
        </li>
        <li>
          Data Scalability: NoSQL databases are horizontally scalable, meaning
          they can handle increased workload by distributing data across
          multiple servers or nodes.
        </li>
        <li>
          Query Language: NoSQL databases use various query languages, such as
          MongoDBs query language or CouchDBs MapReduce, which are typically
          more flexible and suitable for handling unstructured data.
        </li>
      </div>

      <div className="shadow-lg p-5 rounded">
        <h1 className="font-bold">What is express js? What is Nest JS </h1>
        <p>
          Express.js is a popular web application framework for Node.js. It
          provides a simple and minimalist approach to building web servers and
          APIs. Express.js allows developers to handle HTTP requests, define
          routes, and manage middleware to handle various aspects of web
          development, such as parsing request bodies, handling authentication,
          and serving static files. It offers a flexible and modular structure
          that enables developers to create scalable and robust web
          applications.
        </p>
        <p>
          Nest.js, on the other hand, is a progressive and efficient framework
          for building server-side applications with Node.js. It is built on top
          of Express.js and adds additional features and architectural patterns
          to enhance developer productivity and code maintainability. Nest.js
          follows the principles of modularity, dependency injection, and
          decorators to provide a structured and organized way of developing
          Node.js applications. It integrates well with TypeScript, allowing for
          static typing, decorators, and other advanced language features.
        </p>
      </div>

      <div className="shadow-lg p-5 rounded">
        <h1 className="font-bold">
          What is MongoDB aggregate and how does it work
        </h1>
        <p>
          In MongoDB, the aggregate is a powerful aggregation framework that
          allows you to perform advanced data processing operations on your
          collections. It provides a way to combine, transform, and analyze data
          using a pipeline of stages. The aggregate framework works by
          processing documents through a sequence of stages. Each stage performs
          a specific operation on the input documents and passes the results to
          the next stage in the pipeline. The stages are processed in order, and
          the final result is returned.
        </p>
      </div>
    </div>
  );
};

export default Blog;
