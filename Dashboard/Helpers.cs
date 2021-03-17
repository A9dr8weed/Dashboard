using System;
using System.Collections.Generic;

namespace Dashboard
{
    public static class Helpers
    {
        private static readonly Random _rand = new Random();

        private static readonly List<string> bizPrefix = new List<string>()
        {
            "ABC",
            "XYZ",
            "MainSt",
            "Sales",
            "Enterprise",
            "Ready",
            "Quick",
            "Budget",
            "Peak",
            "Magic",
            "Family",
            "Comfort"
        };

        private static readonly List<string> bizSuffix = new List<string>()
        {
            "Corporation",
            "Co",
            "Logistics",
            "Transit",
            "Bakery",
            "Goods",
            "Foods",
            "Cleaners",
            "Hotels",
            "Planners",
            "Automotive",
            "Books"
        };

        private static readonly List<string> usStates = new List<string>()
        {
            "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
            "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
            "OR", "PA", "RI", "SC", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
        };

        internal static string MakeUniqueCustomerName(List<string> names)
        {
            int maxNames = bizPrefix.Count * bizSuffix.Count;

            if (names.Count >= maxNames)
            {
                throw new InvalidOperationException("Maximum number of unique names exseeded.");
            }

            string prefix = GetRandom(bizPrefix);
            string suffix = GetRandom(bizSuffix);

            string bizame = prefix + suffix;

            if (names.Contains(bizame))
            {
                MakeUniqueCustomerName(names);
            }

            return prefix + suffix;
        }

        internal static DateTime? GetRandomOrderComplete(DateTime orderPlaced)
        {
            DateTime now = DateTime.Now;
            TimeSpan minLeadTime = TimeSpan.FromDays(7);
            TimeSpan timePassed = now - orderPlaced;

            if (timePassed < minLeadTime)
            {
                return null;
            }

            return orderPlaced.AddDays(_rand.Next(7, 14));
        }

        internal static DateTime GetRandomOrderPlaced()
        {
            DateTime end = DateTime.Now;
            DateTime start = end.AddDays(-90);

            TimeSpan possibleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0, (int)possibleSpan.TotalMinutes), 0);

            return start + newSpan;
        }

        internal static decimal GetRandomOrderTotal()
        {
            return _rand.Next(100, 5000);
        }

        internal static string MakeCustomerEmail(string customerName)
        {
            return $"contact@{customerName.ToLower()}.com";
        }

        internal static string GetRandomState()
        {
            return GetRandom(usStates);
        }

        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }
    }
}