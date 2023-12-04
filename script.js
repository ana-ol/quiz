const categories = {
    "Introducción a AWS": [
        {
            question: "¿En qué consiste la implementación basada en la nube?",
            options: ["Ejecutar todas las partes de la aplicación en las instalaciones", "Migrar solo aplicaciones nuevas a la nube", "Diseñar y crear aplicaciones solo en las instalaciones", "Ejecutar todas las partes de la aplicación en la nube, migrar aplicaciones existentes o crear nuevas aplicaciones en la nube"],
            correctAnswer: "Ejecutar todas las partes de la aplicación en la nube, migrar aplicaciones existentes o crear nuevas aplicaciones en la nube",
            explanation: ""
        },
        {
            question: "¿Cómo se caracteriza la implementación en las instalaciones, también conocida como nube privada, en términos de recursos y tecnologías?",
            options: ["Se implementa en la nube pública utilizando virtualización", "Utiliza tecnologías de administración de recursos sin virtualización", "Se caracteriza por implementar recursos en las instalaciones mediante virtualización y administración de recursos"],
            correctAnswer: "Se caracteriza por implementar recursos en las instalaciones mediante virtualización y administración de recursos",
            explanation: ""
        },
        {
            question: "¿Cuál es uno de los propósitos clave de una implementación híbrida en el contexto de la nube?",
            options: ["Conectar recursos basados en la nube a la infraestructura en las instalaciones", "Desarrollar exclusivamente aplicaciones en la nube sin depender de recursos locales", "Aislar por completo los recursos en la nube de la infraestructura en las instalaciones"],
            correctAnswer: "Conectar recursos basados en la nube a la infraestructura en las instalaciones",
            explanation: ""
        },
        {
            question: "¿Qué es el cómputo en la nube?",
            options: ["IaaS", "La entrega a pedido de recursos de TI a través de Internet con precios de pago por uso", "El procesamiento de datos exclusivamente en servidores físicos locales"],
            correctAnswer: "La entrega a pedido de recursos de TI a través de Internet con precios de pago por uso",
            explanation: ""
        },
        {
            question: "¿De qué otra forma se le conoce a la implementación en las instalaciones?",
            options: ["Implementación en la nube privada", "Aplicación basada en la nube", "Nube de AWS"],
            correctAnswer: "Implementación en la nube privada",
            explanation: ""
        },
        {
            question: "¿Cómo ayuda la escala del cómputo en la nube a ahorrar costos?",
            options: ["Puede implementar aplicaciones rápidamente para los clientes y proporcionarles una latencia baja", "El uso agregado de la nube por parte de un gran número de clientes se traduce en menores precios de pago por uso", "No es necesario invertir en recursos tecnológicos antes de utilizarlos"],
            correctAnswer: "El uso agregado de la nube por parte de un gran número de clientes se traduce en menores precios de pago por uso",
            explanation: ""
        },
    ],
    "Computo en la nube": [
        {
            question: "¿Cuál es una de las ventajas de usar Amazon Elastic Compute Cluod (Amazon EC2)",
            options: ["Solo paga por el tiempo de cómputo que utiliza cuando una instancia se está ejecutando, no cuando está detenida o finalizada", "Gastar dinero por adelantado para comprar hardware", "Esperar a que le entreguen los servidores", "Instalar los servidores en su centro de datos físico"],
            correctAnswer: "Solo paga por el tiempo de cómputo que utiliza cuando una instancia se está ejecutando, no cuando está detenida o finalizada",
            explanation: ""
        },
        {
            question: "¿Qué opción de precio de Amazon EC2 le provee un descuento cuando especifica un número de instancias de EC2 para iniciar un sistema operativo específico, la familia, el tamaño y la tenencia de instancias en una región?",
            options: ["Instancias reservadas convertibles", "Savings Plans de una instancia de EC2", "Instancias spot", "Instancias reservadas Standard"],
            correctAnswer: "Instancias reservadas Standard",
            explanation: ""
        },
        {
            question: "¿Qué tipo de instancia de Amazon EC2 es adecuada para las aplicaciones de almacenamiento de datos?",
            options: ["Memoria optimizada", "Almacenamiento Optimizado", "Uso General", "Cómputo Optimizado"],
            correctAnswer: "Almacenamiento Optimizado",
            explanation: ""
        },
        {
            question: "¿Qué tipo de instancia de Amazon EC2 equilibra los recursos de cómputo, de memoria y de redes?",
            options: ["Memoria optimizada", "Almacenamiento Optimizado", "Uso General", "Cómputo Optimizado"],
            correctAnswer: "Uso General",
            explanation: ""
        },
        {
            question: "¿Qué tipo de instancia de Amazon EC2 es ideal para las bases de datos de alto rendimiento?",
            options: ["Memoria optimizada", "Almacenamiento Optimizado", "Cómputo Acelerado", "Cómputo Optimizado"],
            correctAnswer: "Memoria optimizada",
            explanation: ""
        },
        {
            question: "¿Qué tipo de instancia de Amazon EC2 ofrece procesadores de alto rendimiento?",
            options: ["Memoria optimizada", "Almacenamiento Optimizado", "Cómputo Acelerado", "Cómputo Optimizado"],
            correctAnswer: "Cómputo Optimizado",
            explanation: ""
        },
        {
            question: "¿Qué tipo de instancia de Amazon EC2 es ideal para cálculos numéricos de punto flotante, procesamiento de grafos y coincidencia de patrones de datos?",
            options: ["Cómputo Acelerado", "Almacenamiento Optimizado", "Uso General", "Cómputo Optimizado"],
            correctAnswer: "Cómputo Acelerado",
            explanation: ""
        },
        {
            question: "¿Cúal es una característica del Cómputo Acelerado",
            options: ["Es adecuado para tareas de procesamiento paralelo y cómputo de alto rendimiento", "Generalmente no incluye hardware especializado como GPU", "Está quipado con hardware especializado, como GPU (Unidades de Procesamiento Gráfico) y es usado típicamente para  aprendizaje profundo (machine learning)", "Procesamiento intensivo en CPU"],
            correctAnswer: "Está quipado con hardware especializado, como GPU (Unidades de Procesamiento Gráfico) y es usado típicamente para  aprendizaje profundo (machine learning)",
            explanation: ""
        },
        {
            question: "¿Qué opción de precio de Amazon EC2 le provee un descuento cuando se compromete a realizar gastos por hora a una familia de instancias y a una región por un periodo de 1 año o de 3 años?",
            options: ["Instancias reservadas convertibles", "Savings Plans de una instancia de EC2", "Instancias spot", "Instancias reservadas Standar"],
            correctAnswer: "Savings Plans de una instancia de EC2",
            explanation: ""
        },
        {
            question: "¿Qué distingue a las Instancias Reservadas Convertibles?",
            options: ["Ofrecen descuentos significativos pero con limitaciones de uso", "Permiten cambiar la familia de instancias, el sistema operativo y la capacidad de instancias", "Son ideales para cargas de trabajo intermitentes o temporales"],
            correctAnswer: "Permiten cambiar la familia de instancias, el sistema operativo y la capacidad de instancias"
        },
        {
            question: "¿Cuál es la característica principal de las Instancias Spot de Amazon EC2?",
            options: ["Ofrecen capacidad a precios más bajos pero pueden ser interrumpidas", "Se utilizan para cargas de trabajo consistentes y de larga duración", "Requieren compromisos a largo plazo con descuentos significativos", "Garantizan disponibilidad ininterrumpida a un costo fijo"],
            correctAnswer: "Ofrecen capacidad a precios más bajos pero pueden ser interrumpidas"
        },
        {
            question: "¿Qué servicio de AWS proporciona la funcionalidad para realizar automáticamente el escalado o reducción horizontal de instancias de Amazon EC2 en respuesta a la demanda cambiante?",
            options: ["Amazon S3","AWS Lambda","Amazon EC2 Auto Scaling","Amazon RDS"],
            correctAnswer: "Amazon EC2 Auto Scaling"
        },
        {
            question: "¿Cuáles son los dos enfoques que se pueden utilizar en Amazon EC2 Auto Scaling para gestionar la demanda cambiante de las aplicaciones?",
            options: [ "Escalado vertical y escalado lateral","Escalado anticipado y escalado inmediato", "Escalado dinámico y escalado predictivo", "Escalado automático y escalado manual"],
            correctAnswer: "Escalado dinámico y escalado predictivo"
        },
        {
            question: "En el contexto de Amazon EC2 Auto Scaling, ¿cuáles son las configuraciones que se pueden establecer en un grupo de Auto Scaling?",
            options: ["Número mínimo, número máximo y capacidad esperada", "Tamaño del grupo, capacidad deseada y tiempo de vida de la instancia", "Número mínimo, capacidad deseada y número máximo","Tasa de respuesta, tiempo de espera y ancho de banda"],
            correctAnswer: "Número mínimo, capacidad deseada y número máximo"
        },
        {
            question: "¿Cómo puede Amazon EC2 Auto Scaling ayudar a mantener una mayor sensación de disponibilidad de las aplicaciones?",
            options: ["Añadiendo instancias de EC2 solo cuando sea necesario", "Cancelando instancias de EC2 solo cuando sea necesario","Manteniendo un número fijo de instancias en todo momento", "Cobrando por todas las instancias, independientemente de su uso"],
            correctAnswer: "Añadiendo instancias de EC2 solo cuando sea necesario"
        },
        {
            question: "¿Cómo contribuyen Elastic Load Balancing y Amazon EC2 Auto Scaling para garantizar el rendimiento y la disponibilidad de las aplicaciones en Amazon EC2?",
            options: [ "Elastic Load Balancing y Amazon EC2 Auto Scaling son servicios independientes que no colaboran","Elastic Load Balancing se encarga del rendimiento, mientras que Auto Scaling garantiza la disponibilidad","Trabajan juntos para distribuir el tráfico y ajustar dinámicamente la capacidad en respuesta a la demanda","Solo Elastic Load Balancing tiene un impacto en la disponibilidad de las aplicaciones"],
            correctAnswer: "Trabajan juntos para distribuir el tráfico y ajustar dinámicamente la capacidad en respuesta a la demanda"
        },
        {
            question: "¿Cuál es el beneficio de tener Elastic Load Balancing en un entorno con varias instancias de Amazon EC2?",
            options: [
              "Reducir la cantidad de instancias de EC2",
              "Asegurar que cada instancia tenga la mayor carga de trabajo posible",
              "Distribuir la carga de trabajo entre las instancias para evitar desequilibrios",
              "Eliminar por completo la necesidad de Auto Scaling"
            ],
            correctAnswer: "Distribuir la carga de trabajo entre las instancias para evitar desequilibrios"
        },
        {
            question: "¿Cuál es el propósito principal de Elastic Load Balancing en AWS?",
            options: [
              "Distribuir automáticamente el tráfico de aplicaciones entrantes entre varios recursos",
              "Administrar bases de datos en la nube",
              "Proporcionar almacenamiento de objetos",
              "Facilitar el escalado vertical de instancias de Amazon EC2"
            ],
            correctAnswer: "Distribuir automáticamente el tráfico de aplicaciones entrantes entre varios recursos"
        },
        {
            question: "¿Qué permite hacer Amazon Simple Queue Service (Amazon SQS) en relación con los mensajes entre componentes de software?",
            options: [
              "Eliminar mensajes sin procesar",
              "Enviar mensajes directamente a las instancias de EC2",
              "Enviar, almacenar y recibir mensajes entre componentes de software",
              "Almacenar mensajes solo cuando otros servicios están disponibles"
            ],
            correctAnswer: "Enviar, almacenar y recibir mensajes entre componentes de software"
        },
        {
            question: "¿Cuál es la ventaja principal de utilizar AWS Fargate para cómputo sin servidor?",
            options: [
              "Mayor flexibilidad en la gestión de servidores",
              "No es necesario aprovisionar ni administrar servidores",
              "Menor seguridad en comparación con otros servicios",
              "Compatibilidad exclusiva con aplicaciones monolíticas"
            ],
            correctAnswer: "No es necesario aprovisionar ni administrar servidores"
        },
        {
            question: "¿Qué función cumple Amazon Simple Notification Service (Amazon SNS) en el contexto de microservicios?",
            options: [
              "Envía mensajes entre componentes de software",
              "Administra bases de datos en la nube",
              "Facilita el escalado vertical de instancias de Amazon EC2",
              "Es un servicio de cola de mensajes"
            ],
            correctAnswer: "Envía mensajes entre componentes de software"
        },  
        {
            question: "¿Cuál es la función principal de Amazon Elastic Kubernetes Service (Amazon EKS) en AWS?",
            options: [
              "Proporcionar almacenamiento en la nube",
              "Ejecutar código sin aprovisionar servidores",
              "Gestionar aplicaciones en contenedores Kubernetes",
              "Crear instancias EC2 automáticamente"
            ],
            correctAnswer: "Gestionar aplicaciones en contenedores Kubernetes"
        },             
        {
            question: "¿Cómo se puede describir la función de Amazon Simple Queue Service (Amazon SQS)?",
            options: [
              "Envía mensajes entre componentes de software",
              "Almacena mensajes y facilita la comunicación directa",
              "Facilita el escalado vertical de instancias de Amazon EC2",
              "Es un servicio de cola de mensajes"
            ],
            correctAnswer: "Es un servicio de cola de mensajes"
        },
        {
            question: "¿Qué función cumple Amazon Elastic Container Service (Amazon ECS) en la gestión de contenedores?",
            options: [
              "Es un servicio de cola de mensajes",
              "Permite ejecutar aplicaciones en contenedores y escalarlas en AWS",
              "Administra instancias EC2 manualmente",
              "Proporciona almacenamiento en la nube"
            ],
            correctAnswer: "Permite ejecutar aplicaciones en contenedores y escalarlas en AWS"
        },
        {
            question: "¿Cuáles son los pasos para el funcionamiento de AWS Lambda?",
            options: [
              "1. Aprovisionar instancias, 2. Subir código, 3. Configurar eventos, 4. Ejecutar código",
              "1. Subir código, 2. Establecer eventos, 3. Ejecutar código, 4. Pagar mensualmente",
              "1. Aprovisionar instancias, 2. Subir código, 3. Gestionar instancias, 4. Pagar por código almacenado",
              "1. Subir código, 2. Establecer eventos, 3. Ejecutar código, 4. Pagar solo por el tiempo de cómputo que utiliza"
            ],
            correctAnswer: "1. Subir código, 2. Establecer eventos, 3. Ejecutar código, 4. Pagar solo por el tiempo de cómputo que utiliza"
        },
        {
            question: "¿Cuál es el principal beneficio del cómputo sin servidor, en comparación con el cómputo con servidores virtuales?",
            options: [
              "Menos flexibilidad en la escalabilidad",
              "Menor concentración en innovación",
              "Aprovisionamiento y administración automáticos de servidores",
              "Mayor complejidad en la gestión de aplicaciones"
            ],
            correctAnswer: "Aprovisionamiento y administración automáticos de servidores"
        },
        {
            question: "¿Qué permite hacer AWS Lambda en términos de ejecución de código?",
            options: [
              "Ejecutar código solo en servidores aprovisionados",
              "Ejecutar código sin necesidad de aprovisionar ni administrar servidores",
              "Administrar servidores manualmente",
              "Ejecutar código solo en instancias de EC2"
            ],
            correctAnswer: "Ejecutar código sin necesidad de aprovisionar ni administrar servidores"
        }                      
    ],
    "Infraestructura y fiabilidad global": [  
        {
            question: "¿Cuál es el propósito de las Zonas de Disponibilidad (AZ) en AWS?",
            options: [
              "Reducir la posibilidad de afectar varias zonas de disponibilidad en caso de desastre",
              "Asegurar una latencia baja entre las zonas de disponibilidad",
              "Ampliar las características de los servicios de AWS",
              "Determinar la proximidad a los clientes"
            ],
            correctAnswer: "Reducir la posibilidad de afectar varias zonas de disponibilidad en caso de desastre"
        },  
        {
            question: "¿Cuál de los siguientes factores empresariales es un motivo para seleccionar una región específica debido a regulaciones de datos en una ubicación específica?",
            options: [
              "Proximidad a sus clientes",
              "Cumplimiento con los requisitos legales y de gobernanza de datos",
              "Servicios disponibles dentro de una región",
              "Precios"
            ],
            correctAnswer: "Cumplimiento con los requisitos legales y de gobernanza de datos"
        },
        {
            question: "¿Qué consideración es importante si desea utilizar un servicio específico de AWS, como Amazon Braket, al seleccionar una región para ejecutar sus aplicaciones?",
            options: [
              "Cumplimiento con los requisitos legales y de gobernanza de datos",
              "Proximidad a sus clientes",
              "Servicios disponibles dentro de una región",
              "Precios"
            ],
            correctAnswer: "Servicios disponibles dentro de una región"
        },
        {
            question: "¿Cómo contribuye una ubicación perimetral en Amazon CloudFront a una entrega más rápida de contenido?",
            options: [
              "Almacena todas las copias en caché en un único servidor central",
              "Distribuye el contenido a través de ubicaciones aleatorias",
              "Almacena copias en caché cerca de los clientes para reducir la latencia",
              "Utiliza servidores dedicados para acceder al contenido"
            ],
            correctAnswer: "Almacena copias en caché cerca de los clientes para reducir la latencia"
        },
        {
            question: "¿Cómo permite AWS CloudFormation manejar la infraestructura?",
            options: ["A través de scripts en la línea de comandos", "Utilizando la Consola de Administración de AWS", "Como código, permitiendo la creación segura y repetible", "Automatizando tareas con Elastic Beanstalk"],
            correctAnswer: "Como código, permitiendo la creación segura y repetible"
        },
        {
            question: "¿Qué interfaz basada en la web permite acceder y administrar los servicios de AWS, incluyendo asistentes y flujos de trabajo automatizados?",
            options: ["AWS CLI", "Consola de Administración de AWS", "Kits de Desarrollo de Software", "AWS Elastic Beanstalk"],
            correctAnswer: "Consola de Administración de AWS"
        },
        {
            question: "¿Cuál es el propósito principal de la AWS CLI?",
            options: ["Desarrollar software con kits de desarrollo", "Automatizar acciones a través de scripts en la línea de comandos", "Acceder a servicios de AWS mediante una interfaz basada en la web", "Administrar instancias de AWS Elastic Beanstalk"],
            correctAnswer: "Automatizar acciones a través de scripts en la línea de comandos"
        },
        {
            question: "¿Qué acción puede realizar con AWS Outposts?",
            options: ["Automatizar las acciones de los servicios y aplicaciones de AWS mediante scripts", "Desarrollar aplicaciones de AWS en lenguajes de programación compatibles", "Ampliar la infraestructura y los servicios de AWS a diferentes ubicaciones, incluido el centro de datos en las instalaciones"],
            correctAnswer: "Ampliar la infraestructura y los servicios de AWS a diferentes ubicaciones, incluido el centro de datos en las instalaciones"
        },
    ],
    "Redes": [
        {
            question: "¿Qué permite realizar Amazon Virtual Private Cloud (Amazon VPC) en AWS?",
            options: [
              "Establecer una conexión dedicada entre centros de datos y VPC",
              "Crear secciones aisladas de AWS Cloud y lanzar recursos en una red virtual",
              "Facilitar el acceso directo a internet desde instancias de Amazon EC2",
              "Gestionar la infraestructura de AWS CloudFormation"
            ],
            correctAnswer: "Crear secciones aisladas de AWS Cloud y lanzar recursos en una red virtual"
        },
        {
            question: "¿Qué función cumple una Puerta de Enlace de Internet en Amazon VPC?",
            options: [
              "Permitir que el tráfico público de internet acceda a la VPC",
              "Establecer conexiones privadas dedicadas",
              "Conectar varios VPC entre sí",
              "Cifrar el tráfico de red interno de la VPC"
            ],
            correctAnswer: "Permitir que el tráfico público de internet acceda a la VPC"
        },
        {
            question: "En una VPC que solo incluye recursos privados, ¿qué tipo de conexión se puede utilizar para acceder a esos recursos?",
            options: [
              "Puerta de enlace de internet",
              "Puerta de enlace privada virtual",
              "AWS Direct Connect",
              "AWS Elastic Beanstalk"
            ],
            correctAnswer: "Puerta de enlace privada virtual"
        },
        {
            question: "¿Qué proporciona AWS Direct Connect en relación con Amazon VPC?",
            options: [
              "Una conexión cifrada entre VPC y centros de datos",
              "Una conexión dedicada entre una VPC y el internet",
              "Una conexión privada dedicada entre un centro de datos y una VPC",
              "Una conexión directa a internet desde instancias de Amazon EC2"
            ],
            correctAnswer: "Una conexión privada dedicada entre un centro de datos y una VPC"
        }, 
        {
            question: "¿Qué afirmación describe mejor la lista de control de acceso a la red predeterminada de una cuenta de AWS?",
            options: ["Es con estado y permite todo el tráfico entrante y saliente", "Es sin estado y deniega todo el tráfico entrante y saliente", "Es con estado y deniega todo el tráfico entrante y saliente", "Es sin estado y permite todo el tráfico entrante y saliente"],
            correctAnswer: "Es sin estado y permite todo el tráfico entrante y saliente"
        },
        {
            question: "¿Qué servicio se utiliza para administrar los registros de DNS de los nombres de dominio?",
            options: ["Grupos de seguridad", "Amazon VPC", "Amazon Route 53"],
            correctAnswer: "Un ACL de red"
        },   
        {
            question: "Es un firewall virtual que controla el tráfico entrante y saliente a nivel de la subred",
            options: ["Grupos de seguridad", "Amazon VPC", "Un ACL de red"],
            correctAnswer: "Un ACL de red"
        },    
        {
            question: "Es un firewall virtual que controla el tráfico entrante y saliente de una instancia de Amazon EC2",
            options: ["Grupos de seguridad", "Amazon VPC", "Un ACL de red"],
            correctAnswer: "Grupos de seguridad"
        },  
        {
            question: "Crear una conexión VPN entre la VPC y la red corporativa interna",
            options: ["AWS Direct Connect", "Puerta de enlace Virtual", "Un ACL de red"],
            correctAnswer: "Puerta de enlace Virtual"
        },  
        {
            question: "Conecta las solicitudes de los usuarios a la infraestructura que funciona en AWS (como las instancias de Amazon EC2 y los equilibradores de carga)",
            options: ["AWS Direct Connect", "Amazon Route 53", "Amazon Route DNS"],
            correctAnswer: "Puerta de enlace Virtual"
        }, 
        {
            question: "¿Qué afirmación describe mejor los grupos de seguridad?",
            options: ["Es con estado y permite todo el tráfico entrante y saliente", "Es sin estado y deniega todo el tráfico entrante y saliente", "Es con estado y deniega todo el tráfico entrante de forma predeterminada", "Es sin estado y permite todo el tráfico entrante y saliente"],
            correctAnswer: "Es con estado y deniega todo el tráfico entrante de forma predeterminada"
        },     
    ],
    "Almacenamiento y bases de datos": [
        {
            question: "¿Cuál es la función principal de un almacén de instancias en Amazon EC2?",
            options: [
              "Proporcionar almacenamiento persistente a nivel de bloques",
              "Proporcionar almacenamiento temporal a nivel de bloques",
              "Crear instantáneas de Amazon EBS automáticamente",
              "Gestionar la infraestructura de AWS CloudFormation"
            ],
            correctAnswer: "Proporcionar almacenamiento temporal a nivel de bloques"
        },
        {
            question: "¿Qué sucede con los datos almacenados en un almacén de instancias cuando la instancia de Amazon EC2 se detiene o termina?",
            options: [
              "Se eliminan permanentemente",
              "Permanecen disponibles",
              "Se convierten en instantáneas de Amazon EBS",
              "Se almacenan en la consola de administración de AWS"
            ],
            correctAnswer: "Se eliminan permanentemente"
        },
        {
            question: "¿Qué proporciona Amazon Elastic Block Store (Amazon EBS) en AWS?",
            options: [
              "Almacenes temporales para datos efímeros",
              "Volúmenes de almacenamiento a nivel de bloques para instancias de Amazon EC2",
              "Conexión dedicada a Internet",
              "Automatización de copias de seguridad"
            ],
            correctAnswer: "Volúmenes de almacenamiento a nivel de bloques para instancias de Amazon EC2"
        },
        {
            question: "¿Cuál es la función principal de las instantáneas de Amazon EBS?",
            options: [
              "Copiar todos los datos de un volumen cada vez",
              "Proporcionar almacenamiento persistente a nivel de bloques",
              "Crear una conexión dedicada entre centros de datos y VPC",
              "Realizar copias de respaldo progresivas de volúmenes de EBS"
            ],
            correctAnswer: "Realizar copias de respaldo progresivas de volúmenes de EBS"
        },
        {
            question: '¿Qué elementos componen un objeto en el almacenamiento de objetos de AWS?',
            options: [
              'Datos y archivos adjuntos',
              'Datos, metadatos y una clave',
              'Archivos, metadatos y un índice',
              'Datos, claves y permisos'
            ],
            correctAnswer: 'Datos, metadatos y una clave'
        },
        {
            question: '¿Cuál es el tamaño máximo de archivo para un objeto en Amazon S3?',
            options: ['1 GB', '5 TB', '10 MB', '100 GB'],
            correctAnswer: '5 TB'
        },
        {
            question: '¿Para qué se utiliza la función de control de versiones en Amazon S3?',
            options: [
              'Realizar copias de seguridad automáticas',
              'Rastrear cambios en los objetos a lo largo del tiempo',
              'Limitar el acceso a los archivos',
              'Establecer permisos de solo lectura'
            ],
            correctAnswer: 'Rastrear cambios en los objetos a lo largo del tiempo'
        },
        {
            question: '¿En qué situación S3 One Zone - Acceso poco frecuente sería una opción adecuada?',
            options: [
              'Cuando se requiere alta disponibilidad',
              'Cuando se desea almacenamiento en múltiples zonas de disponibilidad',
              'Cuando se quiere ahorrar costos y se pueden reproducir fácilmente los datos',
              'Cuando se necesita una conexión dedicada a Internet'
            ],
            correctAnswer: 'Cuando se quiere ahorrar costos y se pueden reproducir fácilmente los datos'
        },
        {
            question: '¿Cuál es la característica principal de S3 Intelligent-Tiering?',
            options: [
              'Almacenamiento de bajo costo diseñado para archivar datos',
              'Ideal para datos con patrones de acceso desconocidos o cambiantes',
              'Almacenamiento con acceso inmediato para datos archivados',
              'Recuperación de objetos dentro de 12 horas'
            ],
            correctAnswer: 'Ideal para datos con patrones de acceso desconocidos o cambiantes'
        },
        {
            question: '¿Cuál es el propósito de S3 Glacier Instant Retrieval?',
            options: [
              'Almacenar datos con costos reducidos',
              'Ideal para archivar datos con recuperación rápida',
              'Recuperación de objetos en minutos a horas',
              'Almacenar datos que se acceden una o dos veces al año'
            ],
            correctAnswer: 'Ideal para archivar datos con recuperación rápida'
        },
        {
            question: '¿Qué clase de almacenamiento es adecuada para la retención y preservación digital de datos a largo plazo?',
            options: ['S3 Standard - Acceso poco frecuente', 'S3 Glacier Flexible Retrieval', 'S3 Glacier Deep Archive', 'S3 Intelligent-Tiering'],
            correctAnswer: 'S3 Glacier Deep Archive'
        },
        {
            question: '¿Cuándo se recomienda usar S3 Outposts?',
            options: [
              'Para datos con patrones de acceso desconocidos',
              'Para almacenar archivos multimedia en un sitio web',
              'Cuando se requiere almacenamiento en una única zona de disponibilidad',
              'En entornos de AWS Outposts en las instalaciones'
            ],
            correctAnswer: 'En entornos de AWS Outposts en las instalaciones'
        },
        {
            question: '¿Qué función cumplen los buckets de S3 en Amazon S3 Outposts?',
            options: [
              'Almacenar instantáneas de objetos',
              'Proporcionar acceso a Internet',
              'Facilitar la recuperación, el almacenamiento y el acceso a datos en AWS Outposts',
              'Limitar el acceso a los objetos en las instalaciones'
            ],
            correctAnswer: 'Facilitar la recuperación, el almacenamiento y el acceso a datos en AWS Outposts'
        },
        {
            question: "Es un servicio regional. Almacena datos en varias zonas de disponibilidad y entre ellas ",
            options: ["Amazon EBS", "Amazon EFS", "Amazon S3"],
            correctAnswer: "Amazon EFS"
        },
        {
            question: '¿Cuál es uno de los motores de base de datos compatibles con Amazon RDS?',
            options: ['MongoDB', 'SQLite', 'Cassandra', 'PostgreSQL'],
            correctAnswer: 'PostgreSQL'
        },
        {
            question: '¿Qué ventaja proporciona Amazon Aurora sobre las bases de datos MySQL y PostgreSQL estándares?',
            options: [
              'Mayor flexibilidad en la configuración',
              'Hasta cinco veces más rápida',
              'Compatibilidad con MongoDB',
              'Menor disponibilidad y confiabilidad'
            ],
            correctAnswer: 'Hasta cinco veces más rápida'
        },
        {
            question: '¿Qué tipo de cifrado proporciona Amazon RDS para proteger los datos mientras están almacenados?',
            options: ['Cifrado de tránsito', 'Cifrado de archivos', 'Cifrado en reposo', 'Cifrado de red'],
            correctAnswer: 'Cifrado en reposo'
        },
        {
            question: '¿En cuántas zonas de disponibilidad replica Amazon Aurora los datos para garantizar alta disponibilidad?',
            options: ['Una', 'Dos', 'Tres', 'Cuatro'],
            correctAnswer: 'Tres'
        },
        {
            question: '¿Cómo puede integrar Amazon RDS con AWS Lambda para consultar la base de datos desde una aplicación sin servidor?',
            options: [
              'No es posible integrar Amazon RDS con AWS Lambda',
              'Utilizando un proxy de base de datos',
              'Usando un servidor intermedio dedicado',
              'A través de un túnel VPN'
            ],
            correctAnswer: 'Utilizando un proxy de base de datos'
        },
        {
            question: '¿Cuál es la ventaja de Amazon Aurora en términos de replicación de datos?',
            options: [
              'Replica dos copias de datos',
              'Replica cuatro copias de datos',
              'Replica seis copias de datos',
              'No realiza replicación de datos'
            ],
            correctAnswer: 'Replica seis copias de datos'
        },
        {
            question: '¿Qué ventaja proporciona DynamoDB en términos de escalado?',
            options: [
              'Escalado manual',
              'Escalado automatizado',
              'Escalado de acuerdo con la demanda del usuario',
              'Escalado basado en la capacidad inicial'
            ],
            correctAnswer: 'Escalado automatizado'
        },
        {
            question: '¿Qué significa que DynamoDB es "sin servidor"?',
            options: [
              'No requiere una conexión a Internet',
              'No necesita estar conectado a la nube de AWS',
              'No es necesario aprovisionar ni administrar servidores',
              'No permite el acceso a múltiples usuarios'
            ],
            correctAnswer: 'No es necesario aprovisionar ni administrar servidores'
        },
        {
            question: '¿Cuál es uno de los casos prácticos para los que DynamoDB es una opción adecuada?',
            options: [
              'Bases de datos relacionales tradicionales',
              'Casos con requisitos de baja escalabilidad',
              'Aplicaciones de uso único',
              'Casos prácticos que requieren alto rendimiento y escalabilidad'
            ],
            correctAnswer: 'Casos prácticos que requieren alto rendimiento y escalabilidad'
        },  
        {
            question: '¿Cuál es uno de los principales casos de uso de Amazon Redshift?',
            options: [
              'Alojamiento de sitios web estáticos',
              'Análisis de big data',
              'Desarrollo de aplicaciones móviles',
              'Gestión de bases de datos NoSQL'
            ],
            correctAnswer: 'Análisis de big data'
        },
        {
            question: '¿Qué tipo de cargas de trabajo admite Amazon DocumentDB?',
            options: [
              'Cargas de trabajo de redes sociales',
              'Cargas de trabajo de MongoDB',
              'Cargas de trabajo de bases de datos relacionales',
              'Cargas de trabajo de almacenamiento en caché'
            ],
            correctAnswer: 'Cargas de trabajo de MongoDB'
        },
        {
            question: '¿Para qué tipo de aplicaciones se puede utilizar Amazon Neptune?',
            options: [
              'Aplicaciones de realidad virtual',
              'Aplicaciones de citas en línea',
              'Aplicaciones con conjuntos de datos altamente conectados',
              'Aplicaciones de procesamiento de pagos'
            ],
            correctAnswer: 'Aplicaciones con conjuntos de datos altamente conectados'
        },
        {
            question: '¿Cuál es el propósito principal de Amazon Quantum Ledger Database (Amazon QLDB)?',
            options: [
              'Crear gráficos de datos conectados',
              'Analizar cambios en el historial de datos de la aplicación',
              'Ejecutar transacciones de criptomonedas',
              'Almacenar imágenes y archivos multimedia'
            ],
            correctAnswer: 'Analizar cambios en el historial de datos de la aplicación'
        },
        {
            question: '¿Qué permite Amazon Managed Blockchain?',
            options: [
              'Gestión de bases de datos relacionales',
              'Creación y gestión de redes de blockchain',
              'Creación de aplicaciones de realidad aumentada',
              'Administración de servidores web'
            ],
            correctAnswer: 'Creación y gestión de redes de blockchain'
        },
        {
            question: '¿Cuál es el propósito principal de Amazon ElastiCache?',
            options: [
              'Almacenar datos de registro de la aplicación',
              'Mejorar los tiempos de lectura de solicitudes comunes mediante el almacenamiento en caché',
              'Crear copias de seguridad de bases de datos',
              'Almacenar grandes cantidades de datos multimedia'
            ],
            correctAnswer: 'Mejorar los tiempos de lectura de solicitudes comunes mediante el almacenamiento en caché'
        },
        {
            question: '¿Cuál es el propósito de Acelerador de Amazon DynamoDB (DAX)?',
            options: [
              'Optimizar el rendimiento de consultas SQL',
              'Almacenar grandes cantidades de datos multimedia',
              'Actuar como un servidor DNS',
              'Reducir los tiempos de respuesta a microsegundos para DynamoDB'
            ],
            correctAnswer: 'Reducir los tiempos de respuesta a microsegundos para DynamoDB'
        },
    ],
    "Seguridad": [
        {
            question: "Es responsable de la seguridad en la nube",
            options: ["Amazon EC2", "AWS", "Grupo de seguridad", "Cliente"],
            correctAnswer: "Cliente"
        },
        {
            question: "Supongamos que está configurando políticas de control de servicios (SCP) en AWS Organizations. ¿A qué identidades y recursos se pueden aplicar las SCP?",
            options: ["Usuarios de IAM", "Roles de IAM", "Grupos de IAM y Una unidad Organizativa"],
            correctAnswer: "Grupos de IAM y Una unidad Organizativa",
            explanation: ""
        },
        {
            question: "¿Cuál es el principio fundamental del modelo de responsabilidad compartida de AWS?",
            options: ["AWS se encarga de toda la responsabilidad", " Los clientes tienen toda la responsabilidad", "La responsabilidad está compartida entre AWS y el cliente", "AWS asume la responsabilidad solo en casos de problemas críticos"],
            correctAnswer: "La responsabilidad está compartida entre AWS y el cliente",
            explanation: ""
        },
        {
            question: "Es una ubicación central para administrar varias cuentas de AWS",
            options: ["Zona de Disponibilidad", "Región", "Amazon EC2", "AWS Organizations"],
            correctAnswer: "AWS Organizations",
            explanation: ""
        },
        {
            question: "A qué principio corresponde la siguiente frase \"Un usuario solo tiene acceso a lo que necesita\"",
            options: ["Roles IAM", "Principio de menor privilegio", "Grupo de seguridad", "Pollíticas de IAM"],
            correctAnswer: "Principio de menor privilegio",
            explanation: ""
        },
        {
            question: "Es responsable de la seguridad de la nube",
            options: ["Amazon EC2", "AWS", "Grupo de seguridad", "Cliente"],
            correctAnswer: "AWS",
            explanation: ""
        },
        {
            question: "En AWS Organizations, puede controlar de forma centralizada los permisos de las cuentas de su organización mediante",
            options: ["Grupos", "Roles", "Las políticas de control de servicios (SCP)"],
            correctAnswer: "Las políticas de control de servicios (SCP)",
            explanation: ""
        },  
        {
            question: "Tipo de usuario que no es recomendado usar para tareas cotidianas",
            options: ["Grupos", "Roles", "Usuario root/raíz", "Usuario IAM"],
            correctAnswer: "Usuario root/raíz",
            explanation: ""
        },
        {
            question: "¿Qué componente no está bajo la responsabilidad de AWS según el modelo de responsabilidad compartida?",
            options: ["Configuración de seguridad de red", "Hipervisor", "Administración de parches y actualizaciones de sistemas operativos", "Infraestructura física"],
            correctAnswer: "Administración de parches y actualizaciones de sistemas operativos",
            explanation: ""
        },
        {
            question: "Es un documento que habilita o deniega los permisos a los servicios y recursos de AWS",
            options: ["Una política de IAM", "Amazon S3", "Bucket", "Grupo IAM"],
            correctAnswer: "Una política de IAM",
            explanation: ""
        },
        {
            question: "Características de AWS Organizations",
            options: ["Manejo separado de recursos y políticas en lugar de centralizado.", "Administración centralizada, Facturación unificada, Agrupaciones jerárquicas de las cuentas, control sobre los servicios AWS y acciones API"],
            correctAnswer: "Administración centralizada, Facturación unificada, Agrupaciones jerárquicas de las cuentas, control sobre los servicios AWS y acciones API"
        },
    ],
    "Supervisión y análisis": [
        {
            question: 'Amazon CloudWatch utiliza métricas para representar puntos de datos de recursos y crea gráficos automáticamente.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 'Verdadero'
        },
        {
            question: 'Con CloudWatch, es posible crear alarmas que realicen acciones automáticas basadas en umbral predefinido para métricas.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 'Verdadero'
        },
        {
            question: 'AWS CloudTrail registra la identidad de quien realiza una llamada API, la hora de la llamada, la dirección IP de origen y más para proporcionar un historial completo de la actividad de los usuarios.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 'Verdadero'
        },
        {
            question: 'Los eventos en AWS CloudTrail generalmente se actualizan dentro de los 15 minutos después de una llamada API, y se pueden filtrar por diversos criterios, como hora, fecha, usuario y tipo de recurso.',
            options: ['Verdadero', 'Falso'],
            correctAnswer: 'Verdadero'
        },
        {
            question: '¿Qué categorías examina AWS Trusted Advisor para proporcionar recomendaciones?',
            options: [
              "Solo rendimiento y seguridad",
              "Optimización de costos, rendimiento, seguridad, tolerancia a errores y límites de servicio",
              "Solo optimización de costos y rendimiento",
              "Solo seguridad y tolerancia a errores"
            ],
            correctAnswer: "Optimización de costos, rendimiento, seguridad, tolerancia a errores y límites de servicio"
        },
        {
            question: "¿Qué servicio le permite revisar la seguridad de sus buckets de Amazon S3 mediante la verificación de permisos de acceso abierto?",
            options: ["Amazon GuardDuty", "AWS CloudTrail", "AWS Trusted Advisor"],
            correctAnswer: "AWS Trusted Advisor"
        },
    ],
    "Precios y soporte": [
        {
            question: "Las ofertas 'Siempre gratis' de AWS no caducan y están disponibles para todos los clientes de AWS, por ejemplo AWS Lambda",
            options: ["Verdadero", "Falso"],
            correctAnswer: "Verdadero"
        },
        {
            question: "Las ofertas 12 meses gratis incluyen cantidades específicas de almacenamiento de Amazon S3 Standard, umbrales de horas mensuales de tiempo de cómputo de Amazon EC2 y cantidades de transferencia saliente de datos de Amazon CloudFront",
            options: ["Verdadero", "Falso"],
            correctAnswer: "Verdadero"
        },
        {
            question: "Son tipos de oferta de prueba como Amazon Inspector y Lightsail",
            options: ["Verdadero", "Falso"],
            correctAnswer: "Verdadero"
        }
    ],
    "Migración e innovación": [
        {
            question: "Organiza la orientación en seis áreas de interés, denominadas Perspectivas",
            options: ["AWS Marketplace", "Amazon S3", "Cloud Adoption Framework (AWS CAF)"],
            correctAnswer: "Cloud Adoption Framework (AWS CAF)"
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
        {
            question: "",
            options: ["", "", ""],
            correctAnswer: ""
        },
    ],
    "El traspaso a la nube": [
        {
            question: "Proporciona una forma de medir de forma consistente su arquitectura con respecto a las prácticas recomendadas, los principios de diseño, identificar áreas que deben mejorarse y se basa en seis pilares",
            options: ["Marco de AWS Well-Architected", "Excelencia Operativa", "AWS Snow"],
            correctAnswer: "Marco de AWS Well-Architected"
        },
        {
            question: "Es la capacidad de mejorar continuamente los impactos de sostenibilidad con la reducción del consumo de energía, maximizar los beneficios de los recursos aprovisionados y minimizar los recursos totales requeridos",
            options: ["Sostenibilidad", "Seguridad", "Fiabilidad", "Eficiencia del rendimiento"],
            correctAnswer: "Sostenibilidad"
        },
        {
            question: "Es la capacidad de utilizar los recursos de cómputo de forma eficiente para satisfacer los requisitos del sistema y mantener esa eficiencia a medida que la demanda cambia y la tecnología evoluciona",
            options: ["Excelencia Operativa", "Seguridad", "Optimización de costos", "Eficiencia del rendimiento"],
            correctAnswer: "Eficiencia del rendimiento"
        },
        {
            question: "Es la capacidad de ejecutar sistemas para ofrecer valor empresarial al precio más bajo",
            options: ["Excelencia Operativa", "Optimización de costos", "Fiabilidad", "Eficiencia del rendimiento"],
            correctAnswer: "Optimización de costos"
        },
        {
            question: "Es la capacidad de ejecutar y supervisar sistemas para ofrecer valor empresarial y mejorar continuamente los procesos y procedimientos de soporte",
            options: ["Excelencia Operativa", "Seguridad", "Fiabilidad", "Eficiencia del rendimiento"],
            correctAnswer: "Excelencia Operativa"
        },
        {
            question: "Es la capacidad de un sistema para recuperarse de las interrupciones de la infraestructura o del servicio, adquirir recursos de cómputo de forma dinámica para satisfacer la demanda, mitigar interrupciones como configuraciones erróneas o problemas transitorios de red",
            options: ["Excelencia Operativa", "Seguridad", "Fiabilidad", "Eficiencia del rendimiento"],
            correctAnswer: "Fiabilidad"
        },
        {
            question: "Incluye la capacidad de proteger la información, los sistemas y los activos, al tiempo que se otorga valor empresarial mediante las evaluaciones de riesgo y las estrategias de mitigación",
            options: ["Excelencia Operativa", "Seguridad", "Fiabilidad", "Eficiencia del rendimiento"],
            correctAnswer: "Seguridad"
        },
    ]
};

let currentCategory = null;
let currentQuestionIndex = 0;
let userScore = 0;

function initializeCategories() {
    const categoryButtonsContainer = document.getElementById("category-buttons");
   

    for (const category in categories) {
        const button = document.createElement("button");
        button.textContent = category;
        button.className = "btn btn-outline-custom";
        button.onclick = () => startQuiz(category);
        button.style.marginRight = "10px";
        button.style.marginBottom = "10px";
        categoryButtonsContainer.appendChild(button);
    }
}

function startQuiz(selectedCategory) {
    currentCategory = selectedCategory;
    document.getElementById("category-buttons").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = categories[currentCategory][currentQuestionIndex];
    document.getElementById("question-container").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option btn btn-outline-custom";
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = categories[currentCategory][currentQuestionIndex];

    const optionsContainer = document.getElementById("options-container");
    const optionButtons = optionsContainer.querySelectorAll(".option");

    optionButtons.forEach(button => {
        button.setAttribute("disabled", true);

        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add("correct");
        } else if (button.textContent === selectedOption) {
            button.classList.add("incorrect");
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        userScore++;
    }

    document.getElementById("explanation").textContent = currentQuestion.explanation;

    currentQuestionIndex++;

    if (currentQuestionIndex < categories[currentCategory].length) {
        setTimeout(() => {
            resetOptions();
            loadQuestion();
        }, 2000); 
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Tu puntuación final es: ${userScore} / ${categories[currentCategory].length}`;
    document.getElementById("explanation").textContent = "";
}

function resetOptions() {
    const optionsContainer = document.getElementById("options-container");
    const optionButtons = optionsContainer.querySelectorAll(".option");

    optionButtons.forEach(button => {
        button.removeAttribute("disabled");
        button.classList.remove("correct", "incorrect");
    });
}

initializeCategories();
