// import * as bunyan from 'bunyan';
// const log = bunyan.createLogger( { name: 'FileNode: Test' });

describe(`Testing of the FileNode service`,
  () => {

    test(`nothing to see here`,
      () => {
        // toBe does a shallow comparison.
        expect( 1 ).toBe( 1 );
      }
    );

    test(`nothing deep to see here`,
      () => {
        const deep = {
          one: 1,
          two: {
            a: 'a',
            b: 'b',
          }
        };

        const dive = {
          one: 1,
          two: {
            a: 'a',
            b: 'b',
          }
        };
        // toEqual does a deep comparison.
        expect( deep ).toEqual( dive );
      }
    );

  }
);
