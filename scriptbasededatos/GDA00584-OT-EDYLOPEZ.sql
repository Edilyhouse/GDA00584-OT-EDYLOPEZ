USE [master]
GO
/****** Object:  Database [GDA00584-OT-EDYLOPEZ]    Script Date: 20/12/2024 21:02:16 ******/
CREATE DATABASE [GDA00584-OT-EDYLOPEZ]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GDA00584-OT-EDYLOPEZ', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\GDA00584-OT-EDYLOPEZ.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GDA00584-OT-EDYLOPEZ_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\GDA00584-OT-EDYLOPEZ_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GDA00584-OT-EDYLOPEZ].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ARITHABORT OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET  ENABLE_BROKER 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET RECOVERY FULL 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET  MULTI_USER 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'GDA00584-OT-EDYLOPEZ', N'ON'
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET QUERY_STORE = ON
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [GDA00584-OT-EDYLOPEZ]
GO
/****** Object:  User [360userwebchallange]    Script Date: 20/12/2024 21:02:16 ******/
CREATE USER [360userwebchallange] FOR LOGIN [360userwebchallange] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [360userwebchallange]
GO
/****** Object:  Table [dbo].[Productos]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Productos](
	[idProducto] [int] IDENTITY(1,1) NOT NULL,
	[CategoriaProductos_idCategoriaProductos] [int] NOT NULL,
	[usuarios_idusuarios] [int] NOT NULL,
	[nombre] [varchar](45) NOT NULL,
	[marca] [varchar](45) NULL,
	[codigo] [varchar](45) NOT NULL,
	[stock] [float] NOT NULL,
	[estados_idestados] [int] NOT NULL,
	[precio] [float] NOT NULL,
	[fecha_creacion] [datetime] NOT NULL,
	[foto] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[TotalProductosActivos]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Consultas (Vistas)

-- Total de Productos Activos con Stock Mayor a 0
CREATE VIEW [dbo].[TotalProductosActivos] AS
SELECT COUNT(*) AS Total
FROM Productos
WHERE stock > 0 AND estados_idestados = 1;
GO
/****** Object:  Table [dbo].[Ordenes]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ordenes](
	[idOrden] [int] IDENTITY(1,1) NOT NULL,
	[usuarios_idusuarios] [int] NOT NULL,
	[estados_idestados] [int] NOT NULL,
	[fecha_creacion] [datetime] NOT NULL,
	[nombre_completo] [varchar](255) NULL,
	[direccion] [varchar](255) NULL,
	[telefono] [varchar](45) NULL,
	[correo_electronico] [varchar](255) NULL,
	[fecha_entrega] [date] NULL,
	[total_orden] [float] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idOrden] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[TotalOrdenesAgosto2024]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Total de Quetzales en Órdenes Ingresadas en Agosto 2024
CREATE VIEW [dbo].[TotalOrdenesAgosto2024] AS
SELECT SUM(total_orden) AS Total
FROM Ordenes
WHERE MONTH(fecha_creacion) = 8 AND YEAR(fecha_creacion) = 2024;
GO
/****** Object:  View [dbo].[Top10Clientes]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Top 10 Clientes con Mayor Consumo Histórico
CREATE VIEW [dbo].[Top10Clientes] AS
SELECT TOP 10 usuarios_idusuarios, SUM(total_orden) AS TotalConsumo
FROM Ordenes
GROUP BY usuarios_idusuarios
ORDER BY TotalConsumo DESC;
GO
/****** Object:  Table [dbo].[OrdenDetalles]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrdenDetalles](
	[idOrdenDetalles] [int] IDENTITY(1,1) NOT NULL,
	[Orden_idOrden] [int] NOT NULL,
	[Productos_idProductos] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[precio] [float] NOT NULL,
	[subtotal] [float] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idOrdenDetalles] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[Top10Productos]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Top 10 Productos Más Vendidos en Orden Ascendente
CREATE VIEW [dbo].[Top10Productos] AS
SELECT TOP 10 Productos_idProductos, SUM(cantidad) AS TotalVendidos
FROM OrdenDetalles
GROUP BY Productos_idProductos
ORDER BY TotalVendidos ASC;
GO
/****** Object:  Table [dbo].[CategoriaProductos]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CategoriaProductos](
	[idCategoriaProductos] [int] IDENTITY(1,1) NOT NULL,
	[usuarios_idusuarios] [int] NOT NULL,
	[estados_idestados] [int] NOT NULL,
	[nombre] [varchar](45) NOT NULL,
	[fecha_creacion] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idCategoriaProductos] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ_CategoriaProductos_nombre] UNIQUE NONCLUSTERED 
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[idClientes] [int] IDENTITY(1,1) NOT NULL,
	[razon_social] [varchar](245) NULL,
	[nombre_comercial] [varchar](45) NULL,
	[direccion_entrega] [varchar](255) NULL,
	[telefono] [varchar](45) NULL,
	[email] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[idClientes] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estados]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estados](
	[idestados] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](45) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idestados] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ_Estados_nombre] UNIQUE NONCLUSTERED 
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rol](
	[idrol] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](45) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idrol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[rol_idrol] [int] NOT NULL,
	[correo] [varchar](255) NOT NULL,
	[nombre_completo] [varchar](255) NOT NULL,
	[password] [varchar](255) NOT NULL,
	[telefono] [varchar](45) NULL,
	[fecha_nacimiento] [date] NULL,
	[fecha_creacion] [datetime] NOT NULL,
	[Clientes_idClientes] [int] NULL,
	[estados_idestados] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [idx_Productos_CategoriaProductos_idCategoriaProductos]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Productos_CategoriaProductos_idCategoriaProductos] ON [dbo].[Productos]
(
	[CategoriaProductos_idCategoriaProductos] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_Productos_codigo]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Productos_codigo] ON [dbo].[Productos]
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [idx_Productos_estados_idestados]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Productos_estados_idestados] ON [dbo].[Productos]
(
	[estados_idestados] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_Productos_nombre]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Productos_nombre] ON [dbo].[Productos]
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [idx_Productos_usuarios_idusuarios]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Productos_usuarios_idusuarios] ON [dbo].[Productos]
(
	[usuarios_idusuarios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_Usuarios_correo]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Usuarios_correo] ON [dbo].[Usuarios]
(
	[correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [idx_Usuarios_estados_idestados]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Usuarios_estados_idestados] ON [dbo].[Usuarios]
(
	[estados_idestados] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [idx_Usuarios_rol_idrol]    Script Date: 20/12/2024 21:02:16 ******/
CREATE NONCLUSTERED INDEX [idx_Usuarios_rol_idrol] ON [dbo].[Usuarios]
(
	[rol_idrol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CategoriaProductos]  WITH CHECK ADD  CONSTRAINT [FK_CategoriaProductos_Estados] FOREIGN KEY([estados_idestados])
REFERENCES [dbo].[Estados] ([idestados])
GO
ALTER TABLE [dbo].[CategoriaProductos] CHECK CONSTRAINT [FK_CategoriaProductos_Estados]
GO
ALTER TABLE [dbo].[CategoriaProductos]  WITH CHECK ADD  CONSTRAINT [FK_CategoriaProductos_Usuarios] FOREIGN KEY([usuarios_idusuarios])
REFERENCES [dbo].[Usuarios] ([idUsuario])
GO
ALTER TABLE [dbo].[CategoriaProductos] CHECK CONSTRAINT [FK_CategoriaProductos_Usuarios]
GO
ALTER TABLE [dbo].[OrdenDetalles]  WITH CHECK ADD  CONSTRAINT [FK_OrdenDetalles_Ordenes] FOREIGN KEY([Orden_idOrden])
REFERENCES [dbo].[Ordenes] ([idOrden])
GO
ALTER TABLE [dbo].[OrdenDetalles] CHECK CONSTRAINT [FK_OrdenDetalles_Ordenes]
GO
ALTER TABLE [dbo].[OrdenDetalles]  WITH CHECK ADD  CONSTRAINT [FK_OrdenDetalles_Productos] FOREIGN KEY([Productos_idProductos])
REFERENCES [dbo].[Productos] ([idProducto])
GO
ALTER TABLE [dbo].[OrdenDetalles] CHECK CONSTRAINT [FK_OrdenDetalles_Productos]
GO
ALTER TABLE [dbo].[Ordenes]  WITH CHECK ADD  CONSTRAINT [FK_Ordenes_Estados] FOREIGN KEY([estados_idestados])
REFERENCES [dbo].[Estados] ([idestados])
GO
ALTER TABLE [dbo].[Ordenes] CHECK CONSTRAINT [FK_Ordenes_Estados]
GO
ALTER TABLE [dbo].[Ordenes]  WITH CHECK ADD  CONSTRAINT [FK_Ordenes_Usuarios] FOREIGN KEY([usuarios_idusuarios])
REFERENCES [dbo].[Usuarios] ([idUsuario])
GO
ALTER TABLE [dbo].[Ordenes] CHECK CONSTRAINT [FK_Ordenes_Usuarios]
GO
ALTER TABLE [dbo].[Productos]  WITH CHECK ADD  CONSTRAINT [FK_Productos_CategoriaProductos] FOREIGN KEY([CategoriaProductos_idCategoriaProductos])
REFERENCES [dbo].[CategoriaProductos] ([idCategoriaProductos])
GO
ALTER TABLE [dbo].[Productos] CHECK CONSTRAINT [FK_Productos_CategoriaProductos]
GO
ALTER TABLE [dbo].[Productos]  WITH CHECK ADD  CONSTRAINT [FK_Productos_Estados] FOREIGN KEY([estados_idestados])
REFERENCES [dbo].[Estados] ([idestados])
GO
ALTER TABLE [dbo].[Productos] CHECK CONSTRAINT [FK_Productos_Estados]
GO
ALTER TABLE [dbo].[Productos]  WITH CHECK ADD  CONSTRAINT [FK_Productos_Usuarios] FOREIGN KEY([usuarios_idusuarios])
REFERENCES [dbo].[Usuarios] ([idUsuario])
GO
ALTER TABLE [dbo].[Productos] CHECK CONSTRAINT [FK_Productos_Usuarios]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Clientes] FOREIGN KEY([Clientes_idClientes])
REFERENCES [dbo].[Clientes] ([idClientes])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Clientes]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Estados] FOREIGN KEY([estados_idestados])
REFERENCES [dbo].[Estados] ([idestados])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Estados]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Rol] FOREIGN KEY([rol_idrol])
REFERENCES [dbo].[Rol] ([idrol])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Rol]
GO
/****** Object:  StoredProcedure [dbo].[ActualizarCategoriaProducto]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Actualizar CategoriaProducto


-- @fecha_creacion DATETIME
-- Actualizar CategoriaProducto
 --fecha_creacion = @fecha_creacion

CREATE   PROCEDURE [dbo].[ActualizarCategoriaProducto]
    @idCategoriaProductos INT,
    @usuarios_idusuarios INT,
    @estados_idestados INT,
    @nombre VARCHAR(45)    
AS
BEGIN
    UPDATE CategoriaProductos
    SET usuarios_idusuarios = @usuarios_idusuarios,
        estados_idestados = @estados_idestados,
        nombre = @nombre       
    WHERE idCategoriaProductos = @idCategoriaProductos;
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarCliente]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Actualizar Cliente
CREATE PROCEDURE [dbo].[ActualizarCliente]
    @idClientes INT,
    @razon_social VARCHAR(245),
    @nombre_comercial VARCHAR(45),
    @direccion_entrega VARCHAR(255),
    @telefono VARCHAR(45),
    @email VARCHAR(255)
AS
BEGIN
    UPDATE Clientes
    SET razon_social = @razon_social,
        nombre_comercial = @nombre_comercial,
        direccion_entrega = @direccion_entrega,
        telefono = @telefono,
        email = @email
    WHERE idClientes = @idClientes;
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarEstado]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Actualizar Estado
CREATE PROCEDURE [dbo].[ActualizarEstado]
    @idestados INT,
    @nombre VARCHAR(45)
AS
BEGIN
    UPDATE Estados
    SET nombre = @nombre
    WHERE idestados = @idestados;
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarOrdenConDetalles]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- actualizar orden
CREATE   PROCEDURE [dbo].[ActualizarOrdenConDetalles]
    @idOrden INT,
    @usuarios_idusuarios INT,
    @estados_idestados INT,
    @nombre_completo VARCHAR(255),
    @direccion VARCHAR(255),
    @telefono VARCHAR(45),
    @correo_electronico VARCHAR(255),
    @fecha_entrega DATE,
    @total_orden FLOAT,
    @detallesOrden NVARCHAR(MAX) 
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        -- Actualizar la orden en la tabla Ordenes
        UPDATE Ordenes
        SET usuarios_idusuarios = @usuarios_idusuarios,
            estados_idestados = @estados_idestados,
            nombre_completo = @nombre_completo,
            direccion = @direccion,
            telefono = @telefono,
            correo_electronico = @correo_electronico,
            fecha_entrega = @fecha_entrega,
            total_orden = @total_orden
        WHERE idOrden = @idOrden;

        -- Eliminar los detalles de la orden existentes
        DELETE FROM OrdenDetalles WHERE Orden_idOrden = @idOrden;

        -- Insertar los nuevos detalles de la orden usando OPENJSON
        INSERT INTO OrdenDetalles (Orden_idOrden, Productos_idProductos, cantidad, precio, subtotal)
        SELECT 
            @idOrden,
            JSON_VALUE(detalle.value, '$.Productos_idProductos') AS Productos_idProductos,
            JSON_VALUE(detalle.value, '$.cantidad') AS cantidad,
            JSON_VALUE(detalle.value, '$.precio') AS precio,
            JSON_VALUE(detalle.value, '$.subtotal') AS subtotal
        FROM OPENJSON(@detallesOrden) AS detalle;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarProducto]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--@fecha_creacion DATETIME,
-- Actualizar Producto
CREATE   PROCEDURE [dbo].[ActualizarProducto]
    @idProducto INT,
    @CategoriaProductos_idCategoriaProductos INT,
    @usuarios_idusuarios INT,
    @nombre VARCHAR(45),
    @marca VARCHAR(45),
    @codigo VARCHAR(45),
    @stock FLOAT,
    @estados_idestados INT,
    @precio FLOAT,    
    @foto VARBINARY(MAX)
AS
BEGIN
    UPDATE Productos 
    SET CategoriaProductos_idCategoriaProductos = @CategoriaProductos_idCategoriaProductos, 
        usuarios_idusuarios = @usuarios_idusuarios, 
        nombre = @nombre, 
        marca = @marca, 
        codigo = @codigo, 
        stock = @stock, 
        estados_idestados = @estados_idestados, 
        precio = @precio, 
        fecha_creacion = GETDATE(), 
        foto = @foto
    WHERE idProducto = @idProducto;
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarRol]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Actualizar Rol
CREATE PROCEDURE [dbo].[ActualizarRol]
    @idrol INT,
    @nombre VARCHAR(45)
AS
BEGIN
    UPDATE Rol
    SET nombre = @nombre
    WHERE idrol = @idrol;
END;
GO
/****** Object:  StoredProcedure [dbo].[ActualizarUsuario]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--Actualizar usuario

CREATE   PROCEDURE [dbo].[ActualizarUsuario]
    @id INT,
    @correo VARCHAR(255),
    @nombre_completo VARCHAR(255),
    @password VARCHAR(255),
    @telefono VARCHAR(45)
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        -- Actualizar usuario
        UPDATE Usuarios
        SET 
            correo = @correo,
            nombre_completo = @nombre_completo,
            password = @password,
            telefono = @telefono
        WHERE idUsuario = @id;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END;
GO
/****** Object:  StoredProcedure [dbo].[InactivarProducto]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Inactivar Producto
-- TODO REVISAR EL ESTADO DE PRODUCTOS
CREATE PROCEDURE [dbo].[InactivarProducto]
    @idProducto INT,
    @idEstado INT
AS
BEGIN
    UPDATE Productos
    SET estados_idestados = @idEstado
    WHERE idProducto = @idProducto;
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarCategoriaProducto]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- Insertar CategoriaProducto
CREATE   PROCEDURE [dbo].[InsertarCategoriaProducto]
    @usuarios_idusuarios INT,
    @estados_idestados INT,
    @nombre VARCHAR(45)
AS
BEGIN
    INSERT INTO CategoriaProductos (usuarios_idusuarios, estados_idestados, nombre, fecha_creacion)
    VALUES (@usuarios_idusuarios, @estados_idestados, @nombre, GETDATE());
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarEstado]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



-- Insertar Estado
CREATE PROCEDURE [dbo].[InsertarEstado]
    @nombre VARCHAR(45)
AS
BEGIN
    INSERT INTO Estados (nombre)
    VALUES (@nombre);
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarOrden]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- insertar orden 
CREATE   PROCEDURE [dbo].[InsertarOrden]
    @usuarios_idusuarios INT,
    @estados_idestados INT,
    @nombre_completo VARCHAR(255),
    @direccion VARCHAR(255),
    @telefono VARCHAR(45),
    @correo_electronico VARCHAR(255),
    @fecha_entrega DATE,
    @total_orden FLOAT
AS
BEGIN
    INSERT INTO Ordenes (usuarios_idusuarios, estados_idestados, fecha_creacion, nombre_completo, direccion, telefono, correo_electronico, fecha_entrega, total_orden)
    VALUES (@usuarios_idusuarios, @estados_idestados, GETDATE(), @nombre_completo, @direccion, @telefono, @correo_electronico, @fecha_entrega, @total_orden);

    -- Devolver el ID de la nueva orden
    SELECT SCOPE_IDENTITY() AS idOrden;
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarOrdenDetalle]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- orden detalle
CREATE   PROCEDURE [dbo].[InsertarOrdenDetalle]
    @Orden_idOrden INT,
    @Productos_idProductos INT,
    @cantidad INT,
    @precio FLOAT,
    @subtotal FLOAT
AS
BEGIN
    INSERT INTO OrdenDetalles (Orden_idOrden, Productos_idProductos, cantidad, precio, subtotal)
    VALUES (@Orden_idOrden, @Productos_idProductos, @cantidad, @precio, @subtotal);
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarProducto]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Insertar Producto
CREATE   PROCEDURE [dbo].[InsertarProducto]
    @CategoriaProductos_idCategoriaProductos INT,
    @usuarios_idusuarios INT,
    @nombre VARCHAR(45),
    @marca VARCHAR(45),
    @codigo VARCHAR(45),
    @stock FLOAT,
    @estados_idestados INT,
    @precio FLOAT,
    @foto VARBINARY(MAX)
AS
BEGIN
    INSERT INTO Productos (CategoriaProductos_idCategoriaProductos, usuarios_idusuarios, nombre, marca, codigo, stock, estados_idestados, precio, fecha_creacion, foto)
    VALUES (@CategoriaProductos_idCategoriaProductos, @usuarios_idusuarios, @nombre, @marca, @codigo, @stock, @estados_idestados, @precio, GETDATE(), @foto);
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarRol]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Insertar Rol
CREATE PROCEDURE [dbo].[InsertarRol]
    @nombre VARCHAR(45)
AS
BEGIN
    INSERT INTO Rol (nombre)
    VALUES (@nombre);
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertarUsuarioConCliente]    Script Date: 20/12/2024 21:02:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- insertar usuario
CREATE   PROCEDURE [dbo].[InsertarUsuarioConCliente]
    @usuario NVARCHAR(MAX),  -- JSON con los detalles del usuario
    @cliente NVARCHAR(MAX) = NULL -- JSON con los detalles del cliente (opcional)
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        DECLARE @idCliente INT;

        -- Si se proporciona cliente, insertar el cliente primero
        IF @cliente IS NOT NULL
        BEGIN
            INSERT INTO Clientes (razon_social, nombre_comercial, direccion_entrega, telefono, email)
            SELECT 
                JSON_VALUE(@cliente, '$.razon_social'),
                JSON_VALUE(@cliente, '$.nombre_comercial'),
                JSON_VALUE(@cliente, '$.direccion_entrega'),
                JSON_VALUE(@cliente, '$.telefono'),
                JSON_VALUE(@cliente, '$.email');

            -- Obtener el id del cliente recién insertado
            SET @idCliente = SCOPE_IDENTITY();
        END
        ELSE
        BEGIN
            -- Insertar placeholder -1 si no se proporciona cliente
            SET @idCliente = -1;
        END

        -- Insertar el usuario con el idCliente (si existe)
        INSERT INTO Usuarios (rol_idrol, correo, nombre_completo, password, telefono, fecha_nacimiento, fecha_creacion, Clientes_idClientes, estados_idestados)
        SELECT 
            JSON_VALUE(@usuario, '$.rol_idrol'),
            JSON_VALUE(@usuario, '$.correo'),
            JSON_VALUE(@usuario, '$.nombre_completo'),
            JSON_VALUE(@usuario, '$.password'),
            JSON_VALUE(@usuario, '$.telefono'),
            CAST(JSON_VALUE(@usuario, '$.fecha_nacimiento') AS DATE),
            GETDATE(),
            @idCliente,
            JSON_VALUE(@usuario, '$.estados_idestados');

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END;
GO
USE [master]
GO
ALTER DATABASE [GDA00584-OT-EDYLOPEZ] SET  READ_WRITE 
GO
