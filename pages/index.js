import React from 'react';

export default () => {
  const greenBodyStyleSheet = 'body { background-color: green; }';
  return (
    <div>
      {/* 👍 <style id="__jsx-1154466409">body{background-color:red;}</style> */}
      <style jsx global>{`body { background-color: red; }`}</style>

      {/* 👍 <style id="__jsx-700687559">body{background-color:orange;}</style> */}
      <style jsx global>{'body { background-color: orange; }'}</style>

      {/* 🤔 <style id="__jsx-232827532">{body { background-color: green; };}</style> */}
      <style jsx global>{`${greenBodyStyleSheet}`}</style>

      {/* 😢 SyntaxError: The Identifier `greenBodyStyleSheet` is either `undefined` or it is not an external StyleSheet reference i.e. it doesn\'t come from an `import` or `require` statement */}
      {/* <style jsx global>{greenBodyStyleSheet}</style> */}

      {/* 😢 SyntaxError: Expected a template literal or String literal as the child of the JSX Style tag (eg: <style jsx>{`some css`}</style>), but got BinaryExpression */}
      {/* <style jsx global>{''+greenBodyStyleSheet}</style> */}
    </div>
  );
};
