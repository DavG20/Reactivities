using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class initialmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";");

            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "uuid_generate_v4()"),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Category = table.Column<string>(type: "text", nullable: true),
                    City = table.Column<string>(type: "text", nullable: true),
                    Venue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "Title", "Venue" },
                values: new object[,]
                {
                    { new Guid("13c0a300-64df-4def-8606-986f23fdaec5"), "music", "London", new DateTime(2023, 7, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1657), "Activity 2 months in future", "Future Activity 2", "O2 Arena" },
                    { new Guid("2421a6c5-82c2-4210-9d31-c11889003e34"), "drinks", "London", new DateTime(2023, 3, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1633), "Activity 2 months ago", "Past Activity 1", "Pub" },
                    { new Guid("25e07f83-07b1-4de8-b13d-dca3eca42ebd"), "film", "London", new DateTime(2024, 1, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1684), "Activity 8 months in future", "Future Activity 8", "Cinema" },
                    { new Guid("7257564f-aca3-49a0-bad1-cf8534884f63"), "drinks", "London", new DateTime(2023, 9, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1666), "Activity 4 months in future", "Future Activity 4", "Yet another pub" },
                    { new Guid("72825e06-69a9-4a31-985e-74971b6db9d7"), "culture", "London", new DateTime(2023, 6, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1652), "Activity 1 month in future", "Future Activity 1", "Natural History Museum" },
                    { new Guid("92002baa-699a-4932-b375-0535d1b5f3b9"), "culture", "Paris", new DateTime(2023, 4, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1647), "Activity 1 month ago", "Past Activity 2", "Louvre" },
                    { new Guid("b46186d1-194c-462f-a6af-2b28070434bc"), "drinks", "London", new DateTime(2023, 10, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1671), "Activity 5 months in future", "Future Activity 5", "Just another pub" },
                    { new Guid("c5c0defe-7938-4ae5-bbc1-5cd9cf5d6fc8"), "travel", "London", new DateTime(2023, 12, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1680), "Activity 2 months ago", "Future Activity 7", "Somewhere on the Thames" },
                    { new Guid("d835c310-83da-43c0-8d84-c67d5b48be6a"), "drinks", "London", new DateTime(2023, 8, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1662), "Activity 3 months in future", "Future Activity 3", "Another pub" },
                    { new Guid("f57b8853-9f39-4580-85cb-11bcb6995a32"), "music", "London", new DateTime(2023, 11, 30, 8, 19, 6, 499, DateTimeKind.Utc).AddTicks(1676), "Activity 6 months in future", "Future Activity 6", "Roundhouse Camden" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activities");
        }
    }
}
