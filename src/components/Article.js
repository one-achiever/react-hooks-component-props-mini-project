import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
    const minutesIndicator = minutesToRead < 30
        ? "☕️".repeat(Math.ceil(minutesToRead / 5))
        : "🍱".repeat(Math.ceil(minutesToRead / 10));

    return (
        <article>
            <h3>{title}</h3>
            <small>{minutesIndicator} {minutesToRead} min read</small>
            <p>{preview}</p>
        </article>
    );
}
