<template>
    <v-expansion-panels variant="popout" class="my-4">
        <v-expansion-panel
        title="Bolsa de valores"
        >
            <v-expansion-panel-text>
                La bolsa de valores es una organización, privada o pública, que permite a sus componentes introducir ordenes y realizar transacciones de compra o venta de valores, siendo estos los derechos que tienen sus propietarios.
                Los valores de una sociedad o de una compasiva anónima son las acciones. Los precios de la negociación de los valores se producen en un entorno real y seguro para el inversor, ya que las transacciones de compra y venta entre las partes se realizan obedeciendo a la legalidad vigente. Las bolsas ayudan al desarrollo económico y financiero en el mundo.
                En la bolsa participan:
                Las empresas que requieren financiarse, pero no recurren a los bancos, por lo tanto prefieren al inversor privado.
                Inversores agotados de no hallar rentabilidad a su dinero en una cuenta bancaria.
                Intermediarios que aspiran ganar dinero actuando entre compradores y vendedores.
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Acciones"
        >
            <v-expansion-panel-text>
                LLas acciones son unidades de propiedad de capital en una corporación. Para algunas empresas, las acciones existen como un activo financiero que proporciona una distribución equitativa de los beneficios residuales, si se declaran, en forma de dividendos . Al establecer una corporación, los propietarios pueden optar por emitir acciones ordinarias o acciones preferentes a los inversores. Las empresas emiten acciones a los inversores a cambio de capital, que se utiliza para hacer crecer y operar la empresa.
                A diferencia del capital de deuda, obtenido a través de un préstamo o emisión de bonos, el capital social no tiene un mandato legal para ser reembolsado a los inversionistas y las acciones, aunque tienen la posibilidad pagar dividendos como una distribución de utilidades, no pagan intereses. Casi todas las empresas, desde pequeñas sociedades o hasta corporaciones multinacionales, emiten acciones de algún tipo.
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="ETF"
        >
            <v-expansion-panel-text>
                Un exchange traded fund (ETF) es un tipo de valor que rastrea un índice , sector, producto básico u otro activo, pero que se puede comprar o vender en una bolsa de valores de la misma forma que lo hace una acción normal. Un ETF se puede organizar para rastrear cualquier cosa, desde el precio de un producto individual hasta una colección grande y diversa de valores. Los ETF incluso se pueden formular para realizar un rastreabilidad de estrategias de inversión específicas.
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Trading"
        >
            <v-expansion-panel-text>
                En general la mayoría de las personas ha hecho trading alguna vez en su vida, pues este término se describe simplemente como el intercambio de dinero en una tienda por un producto. Cuando se habla de operar en los mercados bursátiles, es el mismo fundamento, cuando un individuo negocia con acciones, lo que realmente está haciendo es comprar acciones de una empresa. Sí la utilidad de esas acciones incrementa, entonces el individuo gana dinero vendiendolas nuevamente a una cotización más alta. Esto es el trading, comprar algo por un precio y luego venderlo por otro. tal vez más alto obteniendo ganancias y viceversa            
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Indicador técnico"
        >
            <v-expansion-panel-text>
                Los indicadores técnicos son señales heurísticas, se fundamentan en patrones producidos por el precio, volumen, entre otros, que aprovechan los comerciantes que persiguen el análisis técnico. Estos indicadores técnicos pueden asistir a un comerciante a embarcarse de forma productiva a través de un periodo de negociación, o un periodo en el que una acción o ETF fluctúa entre un nivel de resistencia y un nivel de soporte. 
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Media móvil simple (SMA)"
        >
            <v-expansion-panel-text>
            <p>
                    
                    Media móvil simple (SMA): es el tipo más simple y conocido, se calcula tomando la media aritmética de un conjunto dado de valores durante un periodo específico.
                
                <v-img height="400" src="https://clubdecapitales.com/wp-content/uploads/2021/03/PROMEDIO-MOVIL-SIMPLE.jpg"></v-img>           
            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


        <v-expansion-panel
        title="Media móvil exponencial (EMA)"
        >
            <v-expansion-panel-text>
            <p>
                    
                Este tipo de media movil brinda mayor peso a los precios recientes en un intento de evaluar mejor la información.  Su cálculo es de la siguiente forma:                
                <v-img height="250" src="https://help.vertexcrypto.com/hc/article_attachments/4403836031387/media02.png"></v-img>           
            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Cruce de medias móviles MACD"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es el indicador más básico, provee un seguimiento a la tendencia del precio y expresa la relación entre dos o más promedios móviles del precio de un valor.  En el proyecto se trabajó con dos tipos de promedios móviles los cuales son:
                <ul class="px-5">
                    <li>Media móvil simple (SMA)</li>
                    <li>Media móvil exponencial (EMA)</li>
                </ul>

                Cuando el cruce del promedio móvil de menor periodo esté por encima de los demás promedios se dará una señal de entrada para una operación de compra, y cuando el promedio móvil decae su valor por debajo de los demás promedios significaba una señal de salida de la operación

                <v-img height="550" src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0032/8018/linea-promedios-moviles.png?1547130966"></v-img> 
            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Bandas de bollinger bands"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es un indicador un poco más complejo por poseer señales como medias móviles simples y conjuntos de reglas basadas en desviaciones estándar dando como resultado la generación de señales y tendencia del mercado. Hay tres líneas que componen las Bandas de Bollinger, una media móvil simple (banda media) y una banda superior e inferior. Su cálculo se proce de la siguiente manera:

                <v-img height="400" src="https://res.cloudinary.com/lumayo/image/upload/v1648691304/Captura_de_pantalla_de_2022-03-30_20-47-46_rp0asb.png"></v-img> 

                Está señal es muy popular entre comerciantes dado que cuanto más se acercan los precios a la banda superior se cree que el mercado está sobrecomprado y cuando está en la banda inferior se cree que el mercado está sobrevendido.

            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


        <v-expansion-panel
        title="Donchian channels"
        >
            <v-expansion-panel-text>
            <p>
                    
                Los canales de Donchian son tres líneas generadas por cálculos de medias móviles que comprenden un indicador formado por bandas superior e inferior alrededor de una banda de rango medio o mediano. La banda superior marca el precio más alto de un valor durante N períodos, mientras que la banda inferior marca el precio más bajo de un valor durante N períodos. El área entre las bandas superior e inferior representa el Canal Donchian. La fórmula para los canales de Donchian es:

                <v-img height="400" src="https://res.cloudinary.com/lumayo/image/upload/v1648691478/Captura_de_pantalla_de_2022-03-30_20-51-02_pxpar3.png"></v-img> 


            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Nubes de Ichimoku"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es un conjunto de indicadores técnicos que presentan los niveles de soporte y resistencia, así como la fuerza y dirección de la tendencia, por medio de múltiples promedios y trazos en un gráfico en forma de nube con el propósito de pronosticar donde el precio puede detectar soporte o resistencia en el futuro.
                La nube de Ichimoku se constituye de cinco líneas o cálculos:

                <v-img height="400" src="https://res.cloudinary.com/lumayo/image/upload/v1648691576/Captura_de_pantalla_de_2022-03-30_20-52-40_fxgeat.png"></v-img> 


            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


        <v-expansion-panel
        title="Estrategia"
        >
            <v-expansion-panel-text>
            <p>
                    
                Una estrategia de negociación es una metodología sistemática que se utiliza para comprar y vender en los mercados de valores. Una estrategia comercial se basa en reglas y criterios predefinidos que se utilizan al tomar decisiones comerciales. 
                Una estrategia de negociación puede ser simple o compleja e implicar consideraciones tales como estilo de inversión (por ejemplo, valor frente a crecimiento), capitalización de mercado, indicadores técnicos, análisis fundamental, sector industrial, nivel de diversificación de la cartera, horizonte temporal o período de tenencia, tolerancia al riesgo , apalancamiento, consideraciones fiscales, etc. La clave es que una estrategia comercial se establezca utilizando datos y análisis objetivos y se cumpla con diligencia. Al mismo tiempo, una estrategia comercial debe reevaluarse y ajustarse periódicamente a medida que cambian las condiciones del mercado o los objetivos individuales.

            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Backtesting"
        >
            <v-expansion-panel-text>
            <p>
                    
                El backtesting es el método general para ver qué tan bien se comporta una estrategia. El backtesting evalúa la viabilidad de una estrategia comercial al descubrir cómo se desarrollaría utilizando datos históricos. Si el backtesting funciona, los comerciantes y analistas pueden tener la confianza de utilizarlo en el futuro.El backtesting permite a un operador simular una estrategia comercial utilizando datos históricos para generar resultados y analizar el riesgo y la rentabilidad antes de arriesgar capital real. Un backtest bien realizado que arroja resultados positivos asegura a los operadores que la estrategia es fundamentalmente sólida y es probable que genere ganancias cuando se implemente en la realidad. Por otra parte, una prueba retrospectiva bien realizada que genere resultados subóptimos impulsa a los operadores a modificar o rechazar la estrategia.
                Algunos inversores y comerciantes pueden explorar la destreza de un programador calificado para desarrollar el concepto de la estrategia en una forma comprobable, implicando que el programador codifique este concepto en el lenguaje patentado por la plataforma comercial donde opere.
                El programador integra variables establecidas por el usuario que permiten modificar el sistema como por ejemplo el sistema de cruce de medias móviles, alterando las constantes definidas en el sistema, luego se realizan pruebas de backtesting para precisar el valor de promedios móviles más apto para los datos históricos.

            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


        <v-expansion-panel
        title="Forward testing"
        >
            <v-expansion-panel-text>
            <p>
                    
                Después de haber optimizado la estrategia en el backtesting, llega la hora de verificar su comportamiento con operaciones fuera de muestra o como es conocido mayormente, forward testing. Se trata de una simulación de una situación comercial que representa con mayor claridad cómo se puede utilizar un sistema comercial optimizado en sesiones reales. En pocas palabras, el forward testing es una de esas fases de backtesting. No obstante se tiene que prever que aunque el backtesting y el forward testing aportan una idea de su estrategia, no garantiza con exactitud cómo se comportaría un sistema de trading durante el trading en vivo. Los operadores suponen que más pruebas no mejoran la estrategia, pero puede determinar un nivel de fiabilidad que sufraga el riesgo efectivo real.

            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Win Rate"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es uno de los indicadores de observación de rendimiento prácticos , es sencillamente el número de operaciones ganadoras dividido el número total de operaciones.
            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


         <v-expansion-panel
        title="Profit/loss"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es la relación de ganancia promedio de las operaciones ganadoras sobre la pérdida promedio de las operaciones perdedoras en el transcurso de un periodo de tiempo específico. Está relación actúa como un marco de referencia para el comerciante cuyo motivo principal es maximizar las ganancias.
            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel
        title="Profit/loss"
        >
            <v-expansion-panel-text>
            <p>
                    
                Es la relación de ganancia promedio de las operaciones ganadoras sobre la pérdida promedio de las operaciones perdedoras en el transcurso de un periodo de tiempo específico. Está relación actúa como un marco de referencia para el comerciante cuyo motivo principal es maximizar las ganancias.

                <v-img height="400" src="https://res.cloudinary.com/lumayo/image/upload/v1648691860/Captura_de_pantalla_de_2022-03-30_20-57-26_h0b4pd.png"></v-img> 

            </p>
            </v-expansion-panel-text>
        </v-expansion-panel>


    </v-expansion-panels>
</template>
