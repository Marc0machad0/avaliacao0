const  express  =  require ( "express" ) ;
const  app  =  express ( ) ;
const  porta  =  processo . env . PORTO  ||  3000 ;

aplicativo . get ( '/' ,  ( req ,  res )  =>  {
    res . send ( "Atividade antes da avaliação. !!" ) ;
} )

aplicativo . escutar ( porta ,  ( )  =>  {
    consola . log ( "Servidor rodando na porta 3000" ) ;
} )