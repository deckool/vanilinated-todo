{-# LANGUAGE OverloadedStrings #-}

import           Text.Blaze.Html5
import qualified Text.Blaze.Html5 as H
import qualified Text.Blaze.Html5.Attributes as A
import           Text.Blaze.Html.Renderer.Pretty
import qualified Data.ByteString.Lazy.Char8 as C


draw = docTypeHtml $ do
    H.head $ do
        H.title "Todo list"
        H.meta H.! A.httpEquiv "Content-Type" H.! A.content "text/html;charset=UTF-8"
        H.link H.! A.rel "stylesheet" H.! A.href "load.css"
    H.body H.! A.onload "loadText()" $ do
        H.div H.! A.id "container" $ do
            H.header $ do
                H.a H.! A.href "#" H.! A.onclick "localStorage.clear();" H.! A.id "clear" $ "Clear all"
                H.h1 $ "Task list"
            H.section $ do
                H.input H.! A.type_ "text" H.! A.id "input"
                H.input H.! A.type_ "button" H.! A.onclick "addText()" H.! A.value "Add"
                H.ul H.! A.id "taskList" $ ""
            H.a H.! A.href "http://validator.w3.org/check?uri=http%3A%2F%2Fgrooveyourself.ro%2Fgroove%2Ftodo%2F" $ "valid html"
            H.a H.! A.href "http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fgrooveyourself.ro%2Fgroove%2Ftodo%2F" $ "Valid css (warning from base 64 background)"
        H.script H.! A.type_ "text/javascript" H.! A.src "todo.js" $ ""

main = do
  C.writeFile "index.html" $ C.pack $ renderHtml draw
--  print chunks
