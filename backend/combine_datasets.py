import pandas as pd

human_df = pd.read_csv("human_data.csv")
ai_df = pd.read_csv("ai_data.csv")

combined = pd.concat([human_df, ai_df], ignore_index=True)
combined = combined.sample(frac=1).reset_index(drop=True)  # shuffle

combined.to_csv("data.csv", index=False)
