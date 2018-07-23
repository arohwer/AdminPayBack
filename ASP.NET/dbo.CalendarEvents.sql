CREATE TABLE [dbo].[CalendarEvents] (
    [EventID]     INT            IDENTITY (1, 1) NOT NULL,
    [Title]       NVARCHAR (100) NOT NULL,
    [Description] NVARCHAR (500) NOT NULL,
    [Location]    NVARCHAR (50)  NOT NULL,
    [Date]        DATE       NOT NULL,
    [ImagePath]   NVARCHAR (100) NULL,
    [Time] DATETIME NOT NULL, 
    PRIMARY KEY CLUSTERED ([EventID] ASC)
);

